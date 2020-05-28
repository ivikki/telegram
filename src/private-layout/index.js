// outsource dependencies
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import Messenger from './messenger';
import { selector } from '../app/reducer';
import { MESSENGER, SIGN_IN } from '../constants/routes';

const PrivateLayout = memo(() => {
    const { user } = useSelector(selector);
    if (!user) {
        return <Redirect to={{ pathname: SIGN_IN.LINK() }}/>;
    }

    return <Switch>
        <Route path={ MESSENGER.ROUTE } component={Messenger} />
        <Redirect to={{ pathname: MESSENGER.LINK() }}/>
    </Switch>;
});

export default PrivateLayout;
