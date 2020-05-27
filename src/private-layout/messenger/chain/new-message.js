// outsource dependencies
import _ from 'lodash';
import { Field, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faShare } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import { Input } from '../../../components/input';
import ReduxForm from '../../../components/redux-form';

const formName = 'newMessageForm';
const resetForm = () => reset(formName);

const NewMessage = memo(() => {
    const dispatch = useDispatch();

    const formValidation = values => {
        const errors = {};
        if (!String(values.message).trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const submitForm = useCallback(data => {
        if (!_.isEmpty(data.message)) {
            dispatch({ type: TYPE.CREATE_MESSAGE, ...data });
            dispatch(resetForm());
        }
    }, [dispatch]);

    return <div className="d-flex new-message-wrapper p-2 pb-3">
        <FontAwesomeIcon icon={faPaperclip} className="mr-3 icon"/>
        <ReduxForm
            form={formName}
            onSubmit={submitForm}
            initialValues={{}}
            className="input-message d-flex flex-grow-1 align-items-center justify-content-between"
            validate={formValidation}
        >
            <Field
                component={Input}
                name="message"
                className="border-0"
                rootClassName="flex-grow-1"
                placeholder="Write a message..."
            />
            <FontAwesomeIcon icon={faSmile} className="mx-3 icon"/>
            <button type="submit" className="border-0 mt-1">
                <FontAwesomeIcon icon={faShare} className="icon active-icon"/>
            </button>
        </ReduxForm>
    </div>;
});

export default NewMessage;
