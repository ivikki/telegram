// outsource dependencies
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { Input, ListGroup, ListGroupItem } from 'reactstrap';
import { getMessages } from '../../services/api.service';


// local dependencies
import TYPE from './types';
import defAvatar from '../../images/default_avatar.svg';


const Chains = memo(({ chains }) => {
    const dispatch = useDispatch();

    return <div className="container chains border-right">
        <Input className="px-1 my-2 w-100 px-2 search-input border-0" type="text" placeholder="Search" />
        <ListGroup className="row chains-menu" tag="div">
            {chains.map(({ id, userName, lastMessage, url, date }) =>
                <ListGroupItem
                    action
                    key={id}
                    tag="div"
                    className="d-flex border-0 chains-menu-item"
                    onClick={() => {
                        const chain = getMessages(id);
                        dispatch({ type: TYPE.META, chain });
                    }}
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
    chains: PropTypes.array.isRequired,
};

export default Chains;
