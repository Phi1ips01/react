import React, { Component, Fragment } from 'react';
import {
    // BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from '../Home/';
import Details from '../Details';
import BusOperator from '../BusOperator'
import Bus from '../Bus';
import OperatorUpdate from '../OperatorUpdate'
import User from '../User'
import TripData from '../TripData';
import PrivateRoute from '../../utils/PrivateRoute';
import './travel.css'
// import { Instances } from '../../api';

import { ROUTES } from '../../Routes.constants';
import LandingPage from '../landingPage/LandingPage';

class MainFrame extends Component {
    componentDidUpdate(prevProps, prevState) {
        // const { pathname } = this.props.location;
        /* to call all pending api call */
        // if (prevProps.location.pathname !== pathname) {
        //     Instances.map(instance => instance.cancelPending && instance.cancelPending());
        // }
    }

    render() {
        return (
            <Fragment>
                <div >
                    <Switch>
                        <PrivateRoute path={ROUTES.HOME} component={Home} />
                        <PrivateRoute path={ROUTES.DETAILS} component={Details} />
                        <PrivateRoute path={ROUTES.BUS} component={Bus} />
                        <PrivateRoute path={ROUTES.BUS_OPERATOR} component={BusOperator} />
                        <PrivateRoute path={ROUTES.USER} component={User} />
                        <PrivateRoute path={ROUTES.OPERATOR_UPDATE} component={OperatorUpdate} />
                        <PrivateRoute path={ROUTES.LANDING_PAGE} component={LandingPage} />
                        <PrivateRoute path={ROUTES.TRIP_DATA} component={TripData} />
                        <Redirect from={ROUTES.INDEX} to={ROUTES.LANDING_PAGE} />
                    </Switch>
                </div>
            </Fragment>
        );
    }
}
export default MainFrame;
