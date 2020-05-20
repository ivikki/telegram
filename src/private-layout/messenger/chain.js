// outsource dependencies
import React, { memo } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faWindowMaximize, faEllipsisV } from '@fortawesome/fontawesome-free-solid';

// local dependencies
import { selector } from './reducer';
import NewMessage from './new-message';

export default memo(() => {

    const { chain } = useSelector(selector);

    return <div className="chain-wrapper">
        {chain.messages
            ? (<>
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
                    {chain.messages.map(message => <div key={message.id} className="message">
                        <p>{message.text}<span className="small text-grey ml-3">{moment(message.date).format('h:mm')}</span></p>
                    </div>)}
                </div>
                <NewMessage />
            </>)
            : (<div className="messages-wrapper text-center">
                <p className="text-white rounded-pill p-2">Please select a chat to start messaging</p>
            </div>)}
    </div>;
});
