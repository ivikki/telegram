// outsource dependencies
import _ from 'lodash';
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
            className="input-message d-flex justify-content-between"
        >
            <Field
                component="input"
                type="text"
                name="message"
                className="border-0"
                placeholder="Write a message..."
            />
            <FontAwesomeIcon icon={faSmile} className="mx-3 icon mx-1"/>
            <button type="submit" className="border-0">
                <FontAwesomeIcon icon={faShare} className="icon active-icon"/>
            </button>
        </ReduxForm>
    </div>;
});

export default NewMessage;
