// outsource dependencies
import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import Messenger from './messenger';
import * as ROUTES from '../constants/routes';

const PrivateLayout = memo(() =>
    <Switch>
        <Route exact path={ROUTES.SIGN_IN.ROUTE} component={Messenger} />
        <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK() }}/>
    </Switch>
);

export default PrivateLayout;
