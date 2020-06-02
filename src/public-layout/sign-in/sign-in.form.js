// outsource dependencies
import { Field } from 'redux-form';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useEffect, useCallback, useState } from 'react';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import { Select } from '../../components/select';
import { Input } from '../../components/input';
import ReduxForm from '../../components/redux-form';

const formValidation = values => {
    const errors = {};
    if (!values.country) {
        errors.country = 'Country is required';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    } else if (values.phone.length < 8) {
        errors.phone = 'Phone should contain at least 8 symbol character';
    }

    return errors;
};

export default memo(() => {
    const dispatch = useDispatch();
    const [codeCountry, changeCodeCountry] = useState(null);
    const { countries, expectAnswer } = useSelector(selector);

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
                onChange={changeCodeCountryCallback}
            />
        </div>
        <div className="my-4 d-flex">
            <p className="border-bottom mr-3 px-2 code-country">
                {codeCountry}
            </p>
            <Field
                type="number"
                name="phone"
                disabled={expectAnswer}
                component={Input}
                rootClassName="w-100"
                className="input d-inline-block px-2 border-bottom"
                placeholder="-- --- -- --"
            />
        </div>
        <Button
            type="submit"
            color="primary"
            className="w-100 py-2"
        >
            NEXT
        </Button>
    </ReduxForm>;
});
