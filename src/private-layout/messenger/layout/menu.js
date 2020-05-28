// outsource dependencies
import React, { memo, useCallback } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faUser, faPhone, faCog, faMoon, faMicrochip } from '@fortawesome/fontawesome-free-solid';


// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import { useModal } from '../../../modals/settings-modal';
import defAvatar from '../../../images/default_avatar.svg';
import { selector as appSelector } from '../../../app/reducer';

export default memo(() => {
    const { user } = useSelector(appSelector);
    const { isOpenMenu } = useSelector(selector);
    const dispatch = useDispatch();
    const { open } = useModal();

    const handleCloseMenu = useCallback(() => dispatch({ type: TYPE.META, isOpenMenu: false }), [dispatch]);
    const handleOpenSettings = useCallback(() => {
        open();
        handleCloseMenu();
    }, [open, handleCloseMenu]);

    if (!isOpenMenu) {
        return null;
    }

    return <div className="wrapper-menu">
        <div className="menu d-flex flex-column">
            <div className="bg-info py-3 px-4">
                <img alt="avatar" src={user?.url || defAvatar} width="50px" height="50px"
                    className="rounded-circle"/>
                <p className="text-white mb-1 mt-2">{user?.userName}</p>
                <p className="text-white mb-1">{user?.phone}</p>
            </div>
            <ListGroup className="block-menu">
                <ListGroupItem action className="border-0">
                    <span className="icon"><FontAwesomeIcon icon={faUserFriends}/></span>
                    <span className="list font-weight-bold">New Group</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <span className="icon"><FontAwesomeIcon icon={faMicrochip}/></span>
                    <span className="list font-weight-bold">New Channel</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <span className="icon"><FontAwesomeIcon icon={faUser}/></span>
                    <span className="list font-weight-bold">Contacts</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <span className="icon"><FontAwesomeIcon icon={faPhone}/></span>
                    <span className="list font-weight-bold">Calls</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0" onClick={handleOpenSettings}>
                    <span className="icon"><FontAwesomeIcon icon={faCog}/></span>
                    <span className="list font-weight-bold">Settings</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <span className="icon"><FontAwesomeIcon icon={faMoon}/></span>
                    <span className="list font-weight-bold">Night Mode</span>
                </ListGroupItem>
            </ListGroup>
            <div className="bottom-menu position-absolute">
                <p className="text-grey">Telegram Desktop</p>
                <p className="text-grey small">Version 2.1.2 About</p>
            </div>
        </div>
        <div className="menu-shadow" onClick={handleCloseMenu} />
    </div>;
});
