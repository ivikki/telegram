// outsource dependencies
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faSmile, faShare } from '@fortawesome/fontawesome-free-solid';
import { Input } from 'reactstrap';

export default memo(() => {
    return <div className="d-flex new-message-wrapper p-2">
        <FontAwesomeIcon icon={faPaperclip} className="mr-3 icon"/>
        <Input className="border-0" placeholder="Write a message..." />
        <FontAwesomeIcon icon={faSmile} className="mx-3 icon"/>
        <FontAwesomeIcon icon={faShare} className="mr-3 icon active-icon"/>
    </div>;
});
