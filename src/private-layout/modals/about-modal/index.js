// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { faUser, faBell, faQuestion, faBandAid, faList, faEllipsisV, faTimes, faPhone } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import defAvatar from '../../../images/default_avatar.svg';
import { selector as selectorSignIn } from '../../../public-layout/sign-in/reducer';

export default memo(() => {
    const { user } = useSelector(selectorSignIn);

    return <Modal>
        <ModalHeader>
            <div>
                <h3>User Info</h3>
                <FontAwesomeIcon icon={faPhone} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faEllipsisV} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faTimes} className="mr-3 icon"/>

            </div>
            <div>
                <img alt="avatar" src={user.url || defAvatar} width="50px" height="50px"
                    className="rounded-circle"/>
                <span className="mr-2">{user.userName}</span>
            </div>
        </ModalHeader>
        <ModalBody>
            <div>
                <div>
                    <FontAwesomeIcon icon={faQuestion} className="icon"/>
                    <p>{user.userName}</p>
                    <p className="small">Username</p>
                </div>
                <ListGroup>
                    <ListGroupItem action className="border-0">
                        <p className="mr-2 text-info border-bottom">ADD TO CONTACTS</p>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0">
                        <FontAwesomeIcon icon={faBell} className="icon"/>
                        <span>Notifications</span>
                    </ListGroupItem>
                    <ListGroupItem action className="border-0 mb-1">
                        <p className="mr-2 text-info border-bottom">SEND MESSAGE</p>
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
