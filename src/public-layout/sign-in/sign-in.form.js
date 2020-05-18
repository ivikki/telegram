// outsource dependencies
import React, { memo, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { Field } from 'redux-form';

// local dependencies
import ReduxForm from '../../component/redux-form-helpers';
import { Select } from '../../component/select';
import TYPE from './types';
import { selector } from './reducer';

export default memo(() => {
    const dispatch = useDispatch();
    const { countries } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, []);

    return <ReduxForm form="signInForm" onSubmit={data => dispatch({ type: TYPE.UPDATE_DATA, ...data })} initialValues={{}}>
        <div>
            <Field
                name="country"
                component={Select}
                options={countries}
            />
        </div>
        <div>
            <Field
                type="text"
                name="phone"
                component="input"
            />
        </div>
        <Button
            type="submit"
            color="primary"
        >
            NEXT
        </Button>
    </ReduxForm>;
});
