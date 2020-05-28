// outsource dependencies
import { useDispatch } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { Field, reset, submit } from 'redux-form';
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
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            dispatch(submitForm());
        }
    }, [dispatch]);

    return <div className="d-flex new-message-wrapper px-2 align-items-center">
        <span className="icon"><FontAwesomeIcon icon={faPaperclip}/></span>
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
            <span className="icon"><FontAwesomeIcon icon={faSmile}/></span>
            <button type="submit" className="border-0 ml-1">
                <span className="icon active-icon"><FontAwesomeIcon icon={faShare}/></span>
            </button>
        </ReduxForm>
    </div>;
});

export default NewMessage;
