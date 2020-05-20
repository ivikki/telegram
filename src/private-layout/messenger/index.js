// outsource dependencies
import React, { memo } from 'react';
import { Route, Switch } from 'react-router-dom';

// local dependencies
import Layout from './layout';
import Chain from './chain';
import { MESSENGER_CHAIN } from '../../constants/routes';

export default memo(() => {
    return <Layout>
        <Switch>
            <Route path={MESSENGER_CHAIN.ROUTE} component={Chain} />

            <Route component={NoMatch} />
        </Switch>
    </Layout>;
});

function NoMatch () {
    return <div className="messages-wrapper text-center">
        <p className="text-white rounded-pill p-2">Please select a chat to start messaging</p>
    </div>;
}
