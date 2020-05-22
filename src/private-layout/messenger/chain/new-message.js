// outsource dependencies
import { Field, reset } from 'redux-form';
import { useDispatch } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faShare } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import ReduxForm from '../../../components/redux-form';

const formName = 'newMessageForm';
const resetForm = () => reset(formName);

const NewMessage = memo(() => {
    const dispatch = useDispatch();

    const submitForm = useCallback(data => dispatch({ type: TYPE.CREATE_MESSAGE, ...data }), [dispatch]);
    const resetNewMessageForm = useCallback(() => dispatch(resetForm()), [dispatch]);

    return <div className="d-flex new-message-wrapper p-2 pb-3">
        <FontAwesomeIcon icon={faPaperclip} className="mr-3 icon"/>
        <ReduxForm
            form={formName}
            onSubmit={e => {
                submitForm(e);
                resetNewMessageForm();
            }}
            initialValues={{}}
            className="input-message"
        >
            <Field
                component="input"
                type="text"
                name="message"
                className="border-0"
                placeholder="Write a message..."
            />
            <FontAwesomeIcon icon={faSmile} className="mx-3 icon"/>
            <span onClick={() => console.log('ok')}><FontAwesomeIcon icon={faShare} className="mr-3 icon active-icon"/></span>
        </ReduxForm>
    </div>;
});

export default NewMessage;
