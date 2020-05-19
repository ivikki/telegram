// outsource dependencies
import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import Messenger from './messenger';
import { MESSENGER } from '../constants/routes';

const PrivateLayout = memo(() =>
    <Switch>
        <Route exact path={ MESSENGER.ROUTE } component={Messenger} />
        <Redirect to={{ pathname: MESSENGER.LINK() }}/>
    </Switch>
);

export default PrivateLayout;
