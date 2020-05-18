// outsource dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Constants
import Settings from './settings';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import * as ROUTES from '../constants/routes';
// Pages
import Plan from './plan';
import Guests from './guests';
// Modals
import AddGuest from './modals/add-guest';
import AddReservation from './modals/add-reservation';
import AddWalkIn from './modals/add-walkIn';

export class PrivateLayout extends PureComponent {
    render () {
        const { location } = this.props;
        return (
            <div className="w-100">
                <Header/>
                <div className="d-flex align-items-stretch">
                    <Sidebar location={location.pathname}/>
                    <main className="main">
                        <Switch>
                            <Route path={ROUTES.GUESTS.ROUTE} component={Guests} />
                            <Route path={ROUTES.FLOOR_PLAN.ROUTE} component={Plan} />
                            <Route path={ROUTES.SETTINGS.ROUTE} component={Settings} />
                            <Redirect to={{ pathname: ROUTES.FLOOR_PLAN.LINK() }} />
                        </Switch>
                    </main>
                </div>
                <>
                    <AddGuest />
                    <AddReservation />
                    <AddWalkIn />
                </>
            </div>
        );
    }
}
PrivateLayout.propTypes = {
    location: PropTypes.object.isRequired,
};

export default connect(state => ({ auth: state.app.auth }), null)(PrivateLayout);
