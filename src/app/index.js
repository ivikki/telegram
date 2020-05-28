// outsource dependencies
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Redirect, Route, Switch } from 'react-router-dom';

// local dependencies
import { history } from '../store';
import { APP_TYPES } from './types';
import { selector } from './reducer';
import PublicLayout from '../public-layout';
import PrivateLayout from '../private-layout';
import * as ROUTES from '../constants/routes';
import { Modal as InfoModal } from '../modals/info-modal';
import { Modal as FoldersModal } from '../modals/folders-modal';
import { Modal as SettingsModal } from '../modals/settings-modal';
import { Modal as NewFolderModal } from '../modals/new-folder-modal';

export default memo(() => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: APP_TYPES.INITIALIZE });
    }, [dispatch]);

    const { initialized } = useSelector(selector);
    if (!initialized) {
        return null;
    }

    return <>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={ROUTES.LAYOUT_PUBLIC} component={PublicLayout} />
                <Route path={ROUTES.LAYOUT_PRIVATE} component={PrivateLayout} />
                <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK() }} />
            </Switch>
        </ConnectedRouter>

        {/*Modals*/}
        <SettingsModal />
        <InfoModal />
        <FoldersModal />
        <NewFolderModal />
    </>;
});
