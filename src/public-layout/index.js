
// outsource dependencies
import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import SignIn from './sign-in';
import * as ROUTES from '../constants/routes';

const PublicLayout = memo(() =>
    <Switch>
        <Route exact path={ROUTES.SIGN_IN.ROUTE} component={SignIn} />
        <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK() }}/>
    </Switch>
);

export default PublicLayout;
