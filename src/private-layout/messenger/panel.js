// outsource dependencies
import React, { memo } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faSlidersH, faAlignJustify } from '@fortawesome/fontawesome-free-solid';

// local dependencies


export default memo(() => {

    return <div className="panel">
        <ListGroup tag="div" className="panel-menu">
            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faAlignJustify}/>
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faComments} />
                <p>All Chats</p>
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action className="text-grey">
                <FontAwesomeIcon icon={faSlidersH} />
                <p>Edit</p>
            </ListGroupItem>
        </ListGroup>
    </div>;
});
