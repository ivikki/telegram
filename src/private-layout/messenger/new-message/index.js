// outsource dependencies
import { Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import React, { memo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faShare } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import ReduxForm from '../../../components/redux-form';

const NewMessage = memo(() => {
    const dispatch = useDispatch();

    const submitForm = useCallback(data => dispatch({ type: TYPE.UPDATE_DATA, ...data }), [dispatch]);

    return <div className="d-flex new-message-wrapper p-2 pb-3">
        <FontAwesomeIcon icon={faPaperclip} className="mr-3 icon"/>
        <div className="input-message">
            <ReduxForm form="newMessage" onSubmit={(submitForm)} initialValues={{}}>
                <Field
                    component="input"
                    type="text"
                    name="message"
                    className="border-0 w-100"
                    placeholder="Write a message..."
                />
            </ReduxForm>
        </div>
        <FontAwesomeIcon icon={faSmile} className="mx-3 icon"/>
        <span onClick={() => console.log('ok')}><FontAwesomeIcon icon={faShare} className="mr-3 icon active-icon"/></span>
    </div>;
});

export default NewMessage;
