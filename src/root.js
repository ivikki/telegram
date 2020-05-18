import React, { memo } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// Store
import { store } from './store';

// Constants
import * as ROUTES from './constants/routes';

// Components
import PrivateLayout from './private-layout';
import PublicLayout from './public-layout';

const Root = memo(() => {
    return <ConnectedRouter store={store}>
        <Switch>
            <Route path={ROUTES.LAYOUT_PUBLIC} component={PublicLayout} />
            <Route path={ROUTES.LAYOUT_PRIVATE} component={PrivateLayout} />
            <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK() }} />
        </Switch>
    </ConnectedRouter>;
});

export default Root;
