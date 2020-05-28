// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { faUser, faBell, faQuestion, faBandAid, faList, faEllipsisV, faTimes, faPhone } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { useModal } from './index';
import { selector } from './reducer';
import defAvatar from '../../images/default_avatar.svg';

export default memo(() => {
    const { isOpen, user } = useSelector(selector);
    const { close } = useModal();

    return <Modal isOpen={isOpen} toggle={close} className="info-modal">
        <ModalHeader className="position-relative">
            <div className="pb-3">
                <p className="font-weight-bold">User Info</p>
                <div className="position-absolute close-buttons">
                    <span className="icon"><FontAwesomeIcon icon={faPhone}/></span>
                    <span className="icon ml-1"><FontAwesomeIcon icon={faEllipsisV}/></span>
                    <span onClick={close} className="icon ml-1"><FontAwesomeIcon icon={faTimes}/></span>
                </div>
            </div>
            <div>
                <img alt="avatar" src={user?.url|| defAvatar} width="60px" height="60px"
                    className="rounded-circle"/>
                <span className="ml-2">{user?.userName}</span>
            </div>
        </ModalHeader>
        <ModalBody className="px-0">
            <div>
                <div className="pl-3 mb-1">
                    <span className="icon"><FontAwesomeIcon icon={faQuestion}/></span>
                    <span className="list">{user?.userName}</span>
                    <p className="small no-icon">Username</p>
                </div>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        <p className="text-info no-icon">ADD TO CONTACTS</p>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faBell}/></span>
                        <span className="list">Notifications</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0 mb-1">
                        <p className="text-info no-icon">SEND MESSAGE</p>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faBandAid}/></span>
                        <span className="list">1 shared link</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0 mb-1">
                        <span className="icon"><FontAwesomeIcon icon={faUser}/></span>
                        <span className="list">1 group in common</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="icon"><FontAwesomeIcon icon={faList}/></span>
                        <span className="list">Clear history</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="no-icon">Delete chat</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="no-icon text-danger">Block user</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </ModalBody>
    </Modal>;
});

