// outsource dependencies
import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Field, reset, getFormValues } from 'redux-form';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { faTimes, faArrowLeft, faAlignJustify } from '@fortawesome/fontawesome-free-solid';
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
    const { chains, folders, initialized } = useSelector(selector);
    const searchFormValues = useSelector(formValues);
    const [show, changeShow] = useState(false);

    useEffect(() => {
        dispatch({ type: TYPE.INITIALIZE });
    }, [dispatch]);

    const submitForm = useCallback((e = {}, search = '') => dispatch({ type: TYPE.UPDATE_DATA, search }), [dispatch]);
    const resetSearchForm = useCallback(() => {
        dispatch(resetForm());
        submitForm();
    }, [dispatch, submitForm]);
    const handleShowChain = useCallback(() => changeShow(true), []);
    const handleHideChain = useCallback(() => changeShow(false), []);
    const handleMenu = useCallback(() => dispatch({ type: TYPE.META, isOpenMenu: true }), [dispatch]);
    const showPanel = !_.isEmpty(folders);

    if (!initialized) {
        return null;
    }

    return <div className="d-flex wrapper">
        <Menu />
        {showPanel ? <Panel handleMenu={handleMenu} /> : null}
        <div className="container chains border-right">
            <div className="d-flex align-items-center">
                {showPanel ? null
                    :<span className="text-grey mr-3" onClick={handleMenu}>
                        <FontAwesomeIcon icon={faAlignJustify} className="icon"/>
                    </span>}
                <ReduxForm form={formName} onSubmit={() => {}} initialValues={{}} className="flex-grow-1 search position-relative">
                    <Field
                        className="px-1 my-2 w-100 px-2 search-input border-0"
                        component="input"
                        type="text"
                        name="search"
                        placeholder="Search"
                        onChange={submitForm}
                    />
                    {_.get(searchFormValues, 'search')
                    && <span
                        className="position-absolute search-apply"
                        onClick={resetSearchForm}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </span>}
                </ReduxForm >
            </div>
            <ListGroup className="row chains-menu" tag="div">
                {(chains || []).map(({ id, userName, lastMessage, url, date }) =>
                    <ListGroupItem
                        action
                        key={id}
                        tag={Link}
                        to={MESSENGER_CHAIN.LINK(id)}
                        className="d-flex border-0 chains-menu-item"
                        onClick={handleShowChain}
                    >
                        <div className="avatar">
                            <img alt="avatar" src={url || defAvatar} width="50px" height="50px"
                                className="rounded-circle"/>
                        </div>
                        <div className="w-90">
                            <p className="font-weight-bold user-name">{userName}<span
                                className="float-right font-weight-normal">{moment(date).format('h:mm')}</span>
                            </p>
                            <p>{lastMessage}</p>
                        </div>
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
        <div className={`chain-wrapper ${show ? 'show' : ''} ${showPanel ? '' : 'full-width'}`}>
            <span onClick={handleHideChain} className="back icon-show">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </span>
            { children }
        </div>
    </div>;
});
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
