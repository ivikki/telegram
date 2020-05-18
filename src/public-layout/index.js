
// outsource dependencies
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// local dependencies
import Layout from './layout';
import SignIn from './sign-in';
import SignUp from './sign-up';
import NoMatch from '../no-match';
import { config } from '../constants';
import * as ROUTES from '../constants/routes';
import ForgotPassword from './forgot-password';
import ChangePassword from './change-password';
import EmailConfirmation from './email-confirmation';

const PublicLayout = memo(({ location }) => <Layout>
    <Switch>
        <Route exact path={ROUTES.SIGN_IN.ROUTE} component={SignIn} />
        <Route exact path={ROUTES.SIGN_UP.ROUTE} component={SignUp} />
        <Route path={ROUTES.CHANGE_PASSWORD.ROUTE} component={ChangePassword} />
        <Route exact path={ROUTES.FORGOT_PASSWORD.ROUTE} component={ForgotPassword} />
        <Route path={ROUTES.EMAIL_CONFIRMATION.ROUTE} component={EmailConfirmation} />
        {/* OTHERWISE */}
        { config.DEBUG
            ? <Route component={NoMatch} />
            // TODO on otherwise should redirect
            : <Redirect to={{ pathname: ROUTES.SIGN_IN.LINK(), state: { from: location } }}/>
        }
    </Switch>
</Layout>);

PublicLayout.propTypes = {
    location: PropTypes.object.isRequired,
};

export default PublicLayout;
