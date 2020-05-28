// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { faFolder, faBell, faSlidersH, faLanguage, faQuestion, faComment, faLock, faInfo, faEye, faEllipsisV, faTimes } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { useModal } from './index';
import { selector } from './reducer';
import defAvatar from '../../images/default_avatar.svg';
import { selector as appSelector } from '../../app/reducer';
import { useModal as foldersUseModal } from '../folders-modal/index';

export default memo(() => {
    const { user } = useSelector(appSelector);
    const { isOpen } = useSelector(selector);

    const { close } = useModal();
    const { open } = foldersUseModal();

    return <Modal isOpen={isOpen} toggle={close} className="settings-menu-wrapper">
        <ModalHeader className="position-relative">
            <div>
                <p className="font-weight-bold">Settings</p>
                <div className="position-absolute close-buttons">
                    <FontAwesomeIcon icon={faEllipsisV} className="ml-3 icon"/>
                    <span onClick={close}>
                        <FontAwesomeIcon icon={faTimes} className="ml-3 icon"/>
                    </span>
                </div>
            </div>
            <div className="my-3">
                <img alt="avatar" src={user?.url || defAvatar} width="70px" height="70px"
                    className="rounded-circle"/>
                <span className="ml-3">{user?.userName}</span>
            </div>
        </ModalHeader>
        <ModalBody className="p-0">
            <div>
                <ListGroup className="settings-menu">
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faInfo}/></span>
                        <span className="list">Edit profile</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faBell}/></span>
                        <span className="list">Notifications</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                        <span className="list">Privacy and Security</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faComment}/></span>
                        <span className="list">Chat Settings</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0" onClick={open}>
                        <span className="icon"><FontAwesomeIcon icon={faFolder}/></span>
                        <span className="list">Folders</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faSlidersH}/></span>
                        <span className="list">Advanced</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faLanguage}/></span>
                        <span className="list">Language</span>
                        <span className="text-info float-right">English</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faEye}/></span>
                        <span className="list">Default interface scale</span>
                        <div className="mt-3 interface-size">
                            <span className="pt-2">100%</span>
                            <span className="pt-2 ml-2">125%</span>
                            <span className="pt-2 ml-2">150%</span>
                            <span className="pt-2 ml-2">200%</span>
                            <span className="pt-2 ml-2">250%</span>
                            <span className="pt-2 ml-2">300%</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faQuestion}/></span>
                        <span className="list">Telegram FAQ</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="no-icon">Ask a Question</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </ModalBody>
    </Modal>;
});

