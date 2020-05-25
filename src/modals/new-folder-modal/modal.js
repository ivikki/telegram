// outsource dependencies
import { Field } from 'redux-form';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { faFolder } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { useModal } from './index';
import { selector } from './reducer';
import ReduxForm from '../../components/redux-form';

export default memo(() => {
    const { isOpen } = useSelector(selector);
    const { close } = useModal();

    return <Modal isOpen={isOpen} toggle={close} className="new-folder-modal">
        <ModalHeader className="position-relative d-flex justify-content-between">
            <p className="font-weight-bold">New Folder</p>
            <ReduxForm onSubmit={() => {}} initialValues={{}} form="createFolder" className="new-folder">
                <label className="text-primary small">Folder name</label>
                <Field
                    type="text"
                    component="input"
                    name="inputFolder"
                    className="border-0"
                />
                <FontAwesomeIcon icon={faFolder} className="icon pr-0"/>
            </ReduxForm>
        </ModalHeader>
        <ModalBody className="px-0">
            <p className="pl-4 mb-2 text-primary">Included Chats</p>
            <ListGroup>
                <ListGroupItem action className="border-0">
                    <p className="text-primary">ADD CHATS</p>
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
                <Button outline color="primary" size="sm" className="ml-3">CREATE</Button>
            </div>
        </ModalBody>
    </Modal>;
});

