// outsource dependencies
import { Field } from 'redux-form';
import React, { memo, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { faFolder } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

// local dependencies
import TYPES from './types';
import { useModal } from './index';
import { selector } from './reducer';
import { Select } from '../../components/select';
import ReduxForm from '../../components/redux-form';

export default memo(() => {
    const dispatch = useDispatch();
    const { isOpen, userList } = useSelector(selector);
    const { close } = useModal();
    const [isInput, changeOnInput] = useState(false);

    useEffect(() => {
        dispatch({ type: TYPES.INITIALIZE });
    }, [dispatch]);

    const handleChangeOnInput = useCallback(() => {
        changeOnInput(true);
    }, []);

    const submitForm = useCallback(data => {
        dispatch({ type: TYPES.SAVE_FOLDER, ...data });
        close();
    }, [dispatch, close]);

    return <Modal isOpen={isOpen} toggle={close} className="new-folder-modal">
        <ModalHeader>
            <p className="font-weight-bold">New Folder</p>
        </ModalHeader>
        <ModalBody className="px-0">
            <ReduxForm onSubmit={submitForm} initialValues={{}} form="createFolder">
                <label className="px-4 text-primary small d-block">Folder name</label>
                <div className="mx-4 mb-2 position-relative d-flex justify-content-between new-folder">
                    <Field
                        type="text"
                        component="input"
                        name="nameFolder"
                        className="border-0"
                    />
                    <FontAwesomeIcon icon={faFolder} className="icon pr-0"/>
                </div>
                <p className="pl-4 mb-2 text-primary">Included Chats</p>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        {isInput ? <Field
                            component={Select}
                            isMulti
                            options={userList}
                            name="usersFolder"
                        /> : <p className="text-primary" onClick={handleChangeOnInput}>ADD CHATS</p>
                        }
                    </ListGroupItem>
                </ListGroup>
                <p className="p-3 text-grey">Choose chats and types of chats that will appear in this folder.</p>
                <p className="mb-2 text-primary pl-4">Excluded Chats</p>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        <p className="text-primary">REMOVE CHATS</p>
                    </ListGroupItem>
                </ListGroup>
                <p className="p-3 text-grey">Choose chats and types of chats that will appear in this folder.</p>
                <div className="mx-2 d-flex justify-content-end">
                    <Button outline color="primary" size="sm" onClick={close}>CANCEL</Button>
                    <Button outline color="primary" size="sm" type="submit" className="ml-3">CREATE</Button>
                </div>
            </ReduxForm>
        </ModalBody>
    </Modal>;
});

