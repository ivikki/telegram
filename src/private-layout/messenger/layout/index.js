// outsource dependencies
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reset, getFormValues } from 'redux-form';
import React, { memo, useCallback, useEffect } from 'react';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// local dependencies
import Menu from './menu';
import TYPE from './types';
import Panel from './panel';
import { selector } from './reducer';
import ReduxForm from '../../../components/redux-form';
import defAvatar from '../../../images/default_avatar.svg';
import { MESSENGER_CHAIN } from '../../../constants/routes';

const formName = 'searchForm';
const resetForm = () => reset(formName);
const formValues = state => getFormValues(formName)(state);

const Layout = memo(({ children }) => {
    const dispatch = useDispatch();
    const { chains, isOpenMenu } = useSelector(selector);
    const searchFormValues = useSelector(formValues);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    const submitForm = useCallback((e, search) => dispatch({ type: TYPE.UPDATE_DATA, search }), [dispatch]);
    const resetSearchForm = useCallback(() => dispatch(resetForm()), [dispatch]);

    return <div className="d-flex wrapper">
        {!isOpenMenu ? null: <Menu />}
        <Panel />
        <div className="container chains border-right">
            <ReduxForm form={formName} onSubmit={() => {}} initialValues={{}} className="search position-relative">
                <Field
                    className="px-1 my-2 w-100 px-2 search-input border-0"
                    component="input"
                    type="text"
                    name="search"
                    placeholder="Search"
                    onChange={submitForm}
                />
                {_.get(searchFormValues, 'search')
                && <span className="position-absolute search-apply"
                    onClick={e => {
                        resetSearchForm(e);
                        submitForm();
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </span>}
            </ReduxForm >
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
