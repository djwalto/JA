import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import MobileVolunteerClassesPage from '../MobileVolunteerClassesPage/MobileVolunteerClassesPage';
import AdminRegisterPage from '../AdminRegisterPage/AdminRegisterPage';
import AdminVolunteers from '../content/AdminVolunteers';
import AdminClasses from '../content/AdminClasses';
import AdminReports from '../content/AdminReports';
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';
import MobileVolunteerRegisterPage from '../MobileVolunteerRegisterPage/MobileVolunteerRegisterPage';
import MobileMainVolunteerHomePage from '../MobileMainVolunteerHomePage/MobileMainVolunteerHomePage';
import AdminImagesManager from '../AdminImagesManager/AdminImagesManager';
import AdminImages from '../content/AdminImages';

import './App.css';
import AppDashboard from '../../AppDashboard';
import AdminAdministrators from '../content/AdminAdministrators';
class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/login" />

            {/* <Route exact path="/admin" component={AppDashboard} /> */}
            <ProtectedRoute
              exact
              path="/volunteerhome"
              component={MobileMainVolunteerHomePage}
              path="/adminvolunteers"
              component={AdminVolunteers}
            />
            <ProtectedRoute
              exact
              path="/adminadministrators"
              component={AdminAdministrators}
            />
            <ProtectedRoute
              exact
              path="/adminclasses"
              component={AdminClasses}
            />

            <ProtectedRoute exact path="/images" component={AdminImages} />

            <ProtectedRoute
              exact
              path="/adminreports"
              component={AdminReports}
              userVolunteerRedirect="/volunteerhome"
            />
            <ProtectedRoute
              exact
              path="/login"
              component={AdminLoginPage}
              authRedirect="/volunteerhome"
            />
            <Route
              exact
              path="/adminregister/:hex"
              component={AdminRegisterPage}
            />
            <Route
              exact
              path="/volunteerregister/:hex"
              component={MobileVolunteerRegisterPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/volunteerclasses/:id"
              component={MobileVolunteerClassesPage}
              userAdminRedirect="/adminreports"
            />
            <ProtectedRoute
              path="/volunteerhome"
              component={MobileMainVolunteerHomePage}
              userAdminRedirect="/adminreports"
            />

            {/* <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            /> */}
            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/adminlogin"
              component={AdminLoginPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/adminregistration"
              component={AdminRegisterPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRout              authRedirect="/admin"
e
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/volunteerregistration"
              component={MobileVolunteerRegisterPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={RegisterPage}
              authRedirect="/user"
            /> */}

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default connect()(App);
