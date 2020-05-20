// outsource dependencies
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';


// local dependencies
import TYPE from './types';
import defAvatar from '../../../images/default_avatar.svg';
import { selector } from './reducer';
import { MESSENGER_CHAIN } from '../../../constants/routes';
import Panel from './panel';

const Layout = memo(({ children }) => {
    const dispatch = useDispatch();
    const { chains } = useSelector(selector);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    return <div className="d-flex wrapper">
        <Panel />
        <div className="container chains border-right">
            <Input className="px-1 my-2 w-100 px-2 search-input border-0" type="text" placeholder="Search"/>
            {/*<span>*/}
            {/*    <FontAwesomeIcon icon={faTimes} />*/}
            {/*</span>*/}
            <ListGroup className="row chains-menu" tag="div">
                {(chains || []).map(({ id, userName, lastMessage, url, date }) =>
                    <ListGroupItem
                        action
                        key={id}
                        tag={Link}
                        to={MESSENGER_CHAIN.LINK(id)}
                        className="d-flex border-0 chains-menu-item"
                    >
                        <div className="avatar w-20">
                            <img alt="avatar" src={url || defAvatar} width="50px" height="50px"
                                className="rounded-circle"/>
                        </div>
                        <div className="w-80">
                            <p className="font-weight-bold">{userName}<span
                                className="float-right text-grey font-weight-normal">{moment(date).format('h:mm')}</span>
                            </p>
                            <p className="text-grey">{lastMessage}</p>
                        </div>
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
        <div className="chain-wrapper">
            { children }
        </div>
    </div>;
});
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
