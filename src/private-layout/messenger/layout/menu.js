// outsource dependencies
import _ from 'lodash';
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
import { selector as appSelector } from '../../../reducers';

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
            <div className="bg-info py-2 px-3">
                <img alt="avatar" src={_.get(user, 'url') || defAvatar} width="50px" height="50px"
                    className="rounded-circle"/>
                <p className="text-white mb-1 mt-2">{_.get(user, 'userName')}</p>
                <p className="text-white mb-1">{_.get(user, 'phone')}</p>
            </div>
            <ListGroup className="block-menu">
                <ListGroupItem action className="border-0">
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
                <ListGroupItem action className="border-0" onClick={handleOpenSettings}>
                    <FontAwesomeIcon icon={faCog} className="icon" />
                    <span>Settings</span>
                </ListGroupItem>
                <ListGroupItem action className="border-0">
                    <FontAwesomeIcon icon={faMoon} className="icon"/>
                    <span>Night Mode</span>
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
