import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Spring } from 'react-spring/renderprops';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// CUSTOM COMPONENTS
import './LoginForm.css';

// component for existing user log in
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }; // end state

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
    this.props.dispatch({
      type: 'FETCH_USER',
    });
  }; // end login

  // captures change on each input
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; // end handleInputChangeFor

  render() {
    return (
      <div className="loginDiv">
        <div className="overlay">
          <Card className="loginCard" onSubmit={this.login}>
            <Spring
              from={{ opacity: 0, marginTop: -600 }}
              to={{ opacity: 1, marginTop: 0 }}
            >
              {(props) => (
                <div style={props}>
                  <Container
                    className="loginContainer"
                    component="main"
                    maxWidth="xs"
                  >
                    <CssBaseline />
                    <div className="loginPaper">
                      <ArrowBackIcon className="loginArrow" />
                      <br></br>
                      <br></br>
                      <Avatar className="loginAvatar">
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography
                        className="loginTitle"
                        component="h1"
                        variant="h5"
                      >
                        Log In
                      </Typography>
                      {this.props.store.errors.loginMessage && (
                        <h3 className="alert" role="alert">
                          {this.props.store.errors.loginMessage}
                        </h3>
                      )}
                      <form className="loginForm" noValidate>
                        <TextField
                          margin="normal"
                          fullWidth
                          label="Username"
                          autoFocus
                          type="text"
                          name="username"
                          required
                          value={this.state.username}
                          onChange={this.handleInputChangeFor('username')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          name="password"
                          label="Password"
                          id="password"
                          autoComplete="current-password"
                          type="password"
                          required
                          value={this.state.password}
                          onChange={this.handleInputChangeFor('password')}
                        />
                        {/* <Link className="loginLink" to="/admin"> */}
                        <Button
                          type="submit"
                          fullWidth
                          color="primary"
                          className="loginButton"
                          variant="contained"
                          value="Log In"
                        >
                          Log In
                        </Button>
                        {/* </Link> */}
                      </form>
                    </div>
                  </Container>
                </div>
              )}
            </Spring>
          </Card>
        </div>
      </div>
    );
  }
} // end LoginForm

export default connect(mapStoreToProps)(withRouter(LoginForm));
