// outsource dependencies
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { memo, useCallback, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faWindowMaximize, faEllipsisV } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPE from './types';
import { selector } from './reducer';
import NewMessage from './new-message';
import { useModal } from '../../../modals/info-modal';
import defAvatar from '../../../images/default_avatar.svg';
import { selector as appSelector } from '../../../app/reducer';

export default memo(() => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { chain, initialized } = useSelector(selector);
    const { user } = useSelector(appSelector);
    const { open } = useModal();

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE, id });
    }, [id, dispatch]);

    const handleOpen = useCallback(() => open(id), [id, open]);

    if (!initialized) {
        return null;
    }

    return <>
        <div className="block-info py-2 d-flex justify-content-between align-items-center">
            <div className="user-block-info d-flex align-items-center" onClick={handleOpen}>
                <img alt="avatar" src={chain?.url || defAvatar} width="40px" height="40px"
                    className="rounded-circle mr-2"/>
                <h5 className="d-inline-block mb-0">{chain?.userName}</h5>
            </div>
            <div className="navigation text-grey">
                <FontAwesomeIcon icon={faPhone} className="mr-3 icon icon-hide"/>
                <FontAwesomeIcon icon={faSearch} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faWindowMaximize} className="mr-3 icon icon-hide"/>
                <FontAwesomeIcon icon={faEllipsisV} className="mr-3 icon"/>
            </div>
        </div>
        <div className="d-flex flex-column flex-grow-1 block-message">
            {chain?.messages.map(message => <div key={message.id} className={`message ${+user?.id === +message.sender.id ? 'my-message' : ''}`}>
                <p>{message.text}<span className="small text-grey ml-3">{moment(message.date).format('h:mm')}</span></p>
            </div>)}
        </div>
        <NewMessage />
    </>;
});
