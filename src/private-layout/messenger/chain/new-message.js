// outsource dependencies
import _ from 'lodash';
import { Field, reset, submit } from 'redux-form';
import { useDispatch } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faShare } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import ReduxForm from '../../../components/redux-form';

const formName = 'newMessageForm';
const resetForm = () => reset(formName);
const submitForm = () => submit(formName);

const NewMessage = memo(() => {
    const dispatch = useDispatch();

    const handleSubmitForm = useCallback(data => {
        if (data.message) {
            dispatch({ type: TYPE.CREATE_MESSAGE, ...data });
            dispatch(resetForm());
        }
    }, [dispatch]);

    const handleTextSubmit = useCallback(e => {
        const nextLine = e.ctrlKey || e.shiftKey;
        if (e.keyCode === 13 && !nextLine) {
            dispatch(submitForm());
        }
    }, [dispatch]);

    return <div className="d-flex new-message-wrapper p-2 pb-3 align-items-center">
        <FontAwesomeIcon icon={faPaperclip} className="mr-3 icon"/>
        <ReduxForm
            form={formName}
            onSubmit={handleSubmitForm}
            initialValues={{}}
            className="input-message d-flex flex-grow-1 align-items-center justify-content-between"
        >
            <Field
                component="textarea"
                name="message"
                className="border-0 flex-grow-1"
                placeholder="Write a message..."
                onKeyDown={handleTextSubmit}
            />
            <FontAwesomeIcon icon={faSmile} className="mx-3 icon"/>
            <button type="submit" className="border-0 mt-1">
                <FontAwesomeIcon icon={faShare} className="icon active-icon"/>
            </button>
        </ReduxForm>
    </div>;
});

export default NewMessage;
