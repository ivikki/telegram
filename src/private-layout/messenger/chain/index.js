// outsource dependencies
import _ from 'lodash';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faWindowMaximize, faEllipsisV } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import TYPES from './types';
import { selector } from './reducer';
import NewMessage from '../new-message';
import { selector as selectorSignIn } from '../../../public-layout/sign-in/reducer';

export default memo(() => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { chain, initialized } = useSelector(selector);
    const { user } = useSelector(selectorSignIn);

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
            <div className="user-block-info w-80" onClick={() => console.log('about user')}>
                <h5 className="ml-3">{chain.userName}</h5>
            </div>
            <div className="navigation text-grey">
                <FontAwesomeIcon icon={faPhone} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faSearch} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faWindowMaximize} className="mr-3 icon"/>
                <FontAwesomeIcon icon={faEllipsisV} className="mr-3 icon"/>
            </div>
        </div>
        <div className="d-flex flex-column">
            {_.get(chain, 'messages').map(message => <div key={message.id} className={`message ${ +user.id === +message.sender.id ? 'my-message' : ''}`}>
                <p>{message.text}<span className="small text-grey ml-3">{moment(message.date).format('h:mm')}</span></p>
            </div>)}
        </div>
        <NewMessage id={id} />
    </>;
});
