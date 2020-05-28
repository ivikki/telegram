// outsource dependencies
import { useDispatch, useSelector } from 'react-redux';
import React, { memo, useMemo, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { faTimes, faArrowLeft, faFolder, faTrashAlt } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import { useModal } from './index';
import { selector } from './reducer';
import { useModal as settingsUseModal } from '../settings-modal/index';
import { useModal as newFolderUseModal } from '../new-folder-modal/index';
import { selector as layoutSelector } from '../../private-layout/messenger/layout/reducer';

export default memo(() => {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(selector);
    const { close } = useModal();
    const closeSettingModal = settingsUseModal().close;
    const { open } = newFolderUseModal();
    const { folders } = useSelector(layoutSelector);

    const preparedFolders = useMemo(() => (folders || []).map(folder => ({
        ...folder,
        deleteFolder: () => dispatch({ type: TYPE.DELETE_FOLDER, id: folder.id })
    })), [folders, dispatch]);

    const closeAllModals = useCallback(() => {
        close();
        closeSettingModal();
    }, [close, closeSettingModal]);

    return <Modal isOpen={isOpen} toggle={closeAllModals} className="folders-modal">
        <ModalHeader className="position-relative d-flex justify-content-between">
            <div>
                <span onClick={close} className="back">
                    <FontAwesomeIcon icon={faArrowLeft} className="icon"/>
                </span>
                <p className="font-weight-bold title-modal">Folders</p>
                <span className="position-absolute close-buttons" onClick={closeAllModals}>
                    <FontAwesomeIcon icon={faTimes} className="icon"/>
                </span>
            </div>
        </ModalHeader>
        <ModalBody className="px-0">
            <p className="pl-4 mb-3 text-primary">My folders</p>
            <ListGroup className="pb-3">
                {(preparedFolders || []).map(folder =>
                    <ListGroupItem action className="border-0 py-1 d-flex justify-content-between align-items-center" key={folder.id}>
                        <span className="icon"><FontAwesomeIcon icon={faFolder}/></span>
                        <div className="flex-grow-1 ml-3">
                            <p className="text-black">{folder.name}</p>
                            <p>{folder.chains.length} chats</p>
                        </div>
                        <span className="icon"><FontAwesomeIcon icon={faTrashAlt} onClick={folder.deleteFolder}/></span>
                    </ListGroupItem>
                )}
                <ListGroupItem action className="border-0" onClick={open}>
                    <p className="text-primary">CREATE NEW FOLDER</p>
                </ListGroupItem>
            </ListGroup>
            <div className="mb-3 bg-light border-top border-bottom">
                <p className="px-4 py-3 text-grey">Create folders for different groups of chats and quickly switch between them.</p>
            </div>
            <p className="mb-3 text-primary pl-4">Recommended folders</p>
            <div className="mb-3 mx-4 d-flex justify-content-between align-items-center">
                <div>
                    <h5>Unread</h5>
                    <p className="text-grey">New messages from all chats.</p>
                </div>
                <Button color="primary" size="sm">ADD</Button>
            </div>
            <div className="mx-4 d-flex justify-content-between align-items-center">
                <div>
                    <h5>Personal</h5>
                    <p className="text-grey">Only messages from personal chats.</p>
                </div>
                <Button color="primary" size="sm">ADD</Button>
            </div>
        </ModalBody>
    </Modal>;
});

