// outsource dependencies
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap';
// local dependencies
import defAvatar from './default_avatar.svg';


const Chains = memo(({ chains }) => {

    return <div>
        <div>
            <input className="px-1 my-2" type="text" placeholder="Search" />
        </div>
        <ListGroup className="row" tag="div">
            {chains.map(({ id, userName, lastMessage, url, date }) =>
                <ListGroupItem
                    action
                    key={id}
                    className="d-flex border-0"
                >
                    <div className="avatar w-20">
                        <img alt="avatar" src={url || defAvatar} width="50px" height="50px" className="rounded-circle" />
                    </div>
                    <div className="w-80">
                        <p className="font-weight-bold">{userName}<span className="float-right text-grey font-weight-normal">{moment(date).format('h:mm')}</span></p>
                        <p className="text-grey">{lastMessage}</p>
                    </div>
                </ListGroupItem>
            )}
        </ListGroup>
    </div>;
});
Chains.propTypes = {
    chains: PropTypes.Array,
};
Chains.defaultProps = {
    chains: []
};

export default Chains;
