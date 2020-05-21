// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { faUserFriends, faUser, faPhone, faCog, faMoon, faMicrochip } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// local dependencies
import defAvatar from '../../../images/default_avatar.svg';
import { selector } from '../../../public-layout/sign-in/reducer';

export default memo(() => {
    const { user } = useSelector(selector);

    return <div className="wrapper-menu">
        <div className="menu">
            <div className="bg-info py-2 px-3">
                <img alt="avatar" src={user.url || defAvatar} width="40px" height="40px"
                    className="rounded-circle"/>
                <p className="text-white mb-1 mt-2">{user.userName}</p>
                <p className="text-white mb-1">{user.phone}</p>
            </div>
            <ListGroup>
                <ListGroupItem action className="border-0" onClick={() => console.log("new group")}>
                    <FontAwesomeIcon icon={faUserFriends} className="icon"/>
                    <span>New Group</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faMicrochip} className="icon"/>
                    <span>New Channel</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faUser} className="icon"/>
                    <span>Contacts</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faPhone} className="icon"/>
                    <span>Calls</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0" onClick={() => console.log("settings")}>
                    <FontAwesomeIcon icon={faCog} className="icon"/>
                    <span>Settings</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faMoon} className="icon"/>
                    <span>Night Mode</span>
                </ListGroupItem>
            </ListGroup>
            <div className="position-absolute bottom-menu">
                <p className="text-grey">Telegram Desktop</p>
                <p className="text-grey small">Version 2.1.2 About</p>
            </div>
        </div>
    </div>;
});
