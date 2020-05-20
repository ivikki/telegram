// outsource dependencies
import _ from 'lodash';
import React, { memo, useEffect } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faWindowMaximize, faEllipsisV } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { selector } from './reducer';
import NewMessage from '../new-message';
import TYPES from './types';

export default memo(() => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { chain, initialized } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPES.INITIALIZE, id });
    }, [id, dispatch]);

    if (!initialized) {
        return null;
    }

    if (_.isEmpty(chain.messages)) {
        return <div className="messages-wrapper text-center">
            <p className="text-white rounded-pill p-2">Please select a chat to start messaging</p>
        </div>;
    }

    return <>
        <div className="block-info py-2 d-flex justify-content-between">
            <h5 className="ml-3">{chain.userName}</h5>
            <div className="navigation text-grey">
                <FontAwesomeIcon icon={faPhone} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faSearch} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faWindowMaximize} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faEllipsisV} className="mr-3 icon"/>
            </div>
        </div>
        <div>
            {chain.messages.map(message => <div key={message.id} className={'message'}>
                <p>{message.text}<span className="small text-grey ml-3">{moment(message.date).format('h:mm')}</span></p>
            </div>)}
        </div>
        <NewMessage />
    </>;
});
