// outsource dependencies
import _ from 'lodash';
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
            <div className="py-3">
                <p className="font-weight-bold">User Info</p>
                <div className="position-absolute close-buttons">
                    <FontAwesomeIcon icon={faPhone} className="ml-3 icon"/>
                    <FontAwesomeIcon icon={faEllipsisV} className="ml-3 icon"/>
                    <span onClick={close}><FontAwesomeIcon icon={faTimes} className="icon"/></span>
                </div>
            </div>
            <div>
                <img alt="avatar" src={_.get(user, 'url')|| defAvatar} width="60px" height="60px"
                    className="rounded-circle"/>
                <span className="mr-2">{_.get(user, 'userName')}</span>
            </div>
        </ModalHeader>
        <ModalBody className="px-0">
            <div>
                <div className="pl-4">
                    <FontAwesomeIcon icon={faQuestion} className="icon"/>
                    <span>{_.get(user, 'userName')}</span>
                    <p className="small pl-4">Username</p>
                </div>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        <p className="ml-4 text-info">ADD TO CONTACTS</p>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faBell} className="icon"/>
                        <span>Notifications</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0 mb-1">
                        <p className="ml-4 text-info">SEND MESSAGE</p>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faBandAid} className="icon"/>
                        <span>1 shared link</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0 mb-1">
                        <FontAwesomeIcon icon={faUser} className="icon"/>
                        <span>1 group in common</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faList} className="icon"/>
                        <span>Clear history</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="ml-3">Delete chat</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="ml-3 text-danger">Block user</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </ModalBody>
    </Modal>;
});

