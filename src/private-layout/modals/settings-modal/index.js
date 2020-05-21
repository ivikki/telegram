// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
    faFolder,
    faBell,
    faSlidersH,
    faLanguage,
    faQuestion,
    faComment,
    faLock,
    faInfo,
    faEllipsisV, faTimes
} from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { selector as selectorSignIn } from '../../../public-layout/sign-in/reducer';
import defAvatar from '../../../images/default_avatar.svg';

export default memo(() => {
    const { user } = useSelector(selectorSignIn);

    return <Modal>
        <ModalHeader>
            <div>
                <h3>Settings</h3>
                <FontAwesomeIcon icon={faEllipsisV} className="ml-3 icon"/>
                <FontAwesomeIcon icon={faTimes} className="ml-3 icon"/>
            </div>
            <div>
                <img alt="avatar" src={user.url || defAvatar} width="50px" height="50px"
                    className="rounded-circle"/>
                <span className="mr-2">{user.userName}</span>
            </div>
        </ModalHeader>
        <ModalBody>
            <div>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faInfo} className="icon"/>
                        <span>Edit profile</span>
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
                </ListGroup>
            </div>
        </ModalBody>
        <ModalFooter>
            <ListGroup>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faQuestion} className="icon"/>
                    <span>Telegram FAQ</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <span className="ml-3">Ask a Question</span>
                </ListGroupItem>
            </ListGroup>
        </ModalFooter>
    </Modal>;
});
