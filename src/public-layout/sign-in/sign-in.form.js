// outsource dependencies
import { Field } from 'redux-form';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useEffect, useCallback, useState } from 'react';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import { Select } from '../../components/select';
import ReduxForm from '../../components/redux-form';

const formValidation = values => {
    const errors = {};
    if (!values.country) {
        errors.country = 'Country is required';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    }

    return errors;
};

export default memo(() => {
    const dispatch = useDispatch();
    const [codeCountry, changeCodeCountry] = useState(null);
    const { countries, expectAnswer, errorMessage } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    const submitForm = useCallback(data => dispatch({ type: TYPE.UPDATE_DATA, ...data }), [dispatch]);
    const changeCodeCountryCallback = useCallback(data => changeCodeCountry(data.value), [changeCodeCountry]);

    return <ReduxForm form="signInForm" onSubmit={(submitForm)} initialValues={{}} validate={formValidation}>
        <div className="my-4">
            <Field
                name="country"
                component={Select}
                options={countries}
                disabled={expectAnswer}
                onChange={changeCodeCountryCallback}
            />
        </div>
        {console.log(errorMessage)}
        <div className="my-4">
            <span className="mr-3 px-2 w-20 border-bottom pb-2">{codeCountry}</span>
            <Field
                type="number"
                name="phone"
                disabled={expectAnswer}
                component="input"
                className="input px-2 border-bottom"
                placeholder="-- --- -- --"
            />
        </div>
        {/*{!errorMessage ? null :*/}
        {/*    (<div>{errorMessage.map(err => <span>err</span>)}</div>)*/}
        {/*}*/}
        <Button
            type="submit"
            color="primary"
            className="w-100 py-2"
        >
            NEXT
        </Button>
    </ReduxForm>;
});
