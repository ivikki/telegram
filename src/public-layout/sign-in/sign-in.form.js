// outsource dependencies
import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { Field } from 'redux-form';

// local dependencies
import ReduxForm from '../../components/redux-form';
import { Select } from '../../components/select';
import TYPE from './types';
import { selector } from './reducer';

export default memo(() => {
    const dispatch = useDispatch();
    const { countries } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    const submitForm = useCallback(data => dispatch({ type: TYPE.UPDATE_DATA, ...data }), [dispatch]);

    return <ReduxForm form="signInForm" onSubmit={submitForm} initialValues={{}}>
        <div className="my-4">
            <Field
                name="country"
                component={Select}
                options={countries}
            />
        </div>
        <div className="my-4">
            <span className="mr-3 px-2 w-20 border-bottom pb-2">+380</span>
            <Field
                type="text"
                name="phone"
                component="input"
                className="input w-80 px-2 border-bottom"
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
