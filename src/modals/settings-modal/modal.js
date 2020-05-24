// outsource dependencies
import _ from 'lodash';
import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {
    faFolder,
    faBell,
    faSlidersH,
    faLanguage,
    faQuestion,
    faComment,
    faLock,
    faInfo,
    faEye,
    faEllipsisV, faTimes
} from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { useModal } from './index';
import { selector } from './reducer';
import defAvatar from '../../images/default_avatar.svg';
import { selector as appSelector } from '../../reducers';

const SettingsModal = memo(() => {
    const { user } = useSelector(appSelector);
    const { isOpen } = useSelector(selector);

    const { close } = useModal();

    return <Modal isOpen={isOpen} toggle={close} className="settings-menu-wrapper">
        <ModalHeader className="position-relative">
            <div>
                <p className="font-weight-bold">Settings</p>
                <div className="position-absolute close-buttons">
                    <FontAwesomeIcon icon={faEllipsisV} className="ml-3 icon"/>
                    <span onClick={close}><FontAwesomeIcon icon={faTimes} className="ml-3 icon"/></span>
                </div>
            </div>
            <div className="my-3">
                <img alt="avatar" src={_.get(user, 'url') || defAvatar} width="70px" height="70px"
                    className="rounded-circle"/>
                <span className="ml-3">{_.get(user, 'userName')}</span>
            </div>
        </ModalHeader>
        <ModalBody className="p-0">
            <div>
                <ListGroup className="settings-menu">
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faInfo} className="icon"/>
                        <span className="ml-3">Edit profile</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faBell} className="icon"/>
                        <span>Notifications</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faLock} className="icon"/>
                        <span>Privacy and Security</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faComment} className="icon"/>
                        <span>Chat Settings</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faFolder} className="icon"/>
                        <span>Folders</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faSlidersH} className="icon"/>
                        <span>Advanced</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faLanguage} className="icon"/>
                        <span>Language</span>
                        <span className="text-info float-right">English</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faEye} className="icon"/>
                        <span>Default interface scale</span>
                        <div className="mt-3 pl-4 interface-size">
                            <span className="pt-2">100%</span>
                            <span className="pt-2">125%</span>
                            <span className="pt-2">150%</span>
                            <span className="pt-2">200%</span>
                            <span className="pt-2">250%</span>
                            <span className="pt-2">300%</span>
                        </div>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faQuestion} className="icon"/>
                        <span>Telegram FAQ</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <span className="ml-5">Ask a Question</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </ModalBody>
    </Modal>;
});
SettingsModal.propTypes = {
};

export default SettingsModal;
