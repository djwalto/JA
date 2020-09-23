import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './MobileVolunteerRegisterForm.css';
import { Spring } from 'react-spring/renderprops';

class MobileVolunteerRegisterForm extends Component {
  state = {
    username: '',
    first_name: '',
    last_name: '',
    password: '',
    account_type_id: '2',
    email: '',
    telephone: '',
  }; // end state
  // event listener to dispatch register
  registerUser = (event) => {
    event.preventDefault();
    console.log(this.props);
    console.log(this.props.history);
    console.log(this.state);
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password,
        account_type_id: this.state.account_type_id,
        email: this.state.email,
        telephone: this.state.telephone,
        hex: this.props.match.params.hex,
      },
    });
    this.props.history.push('/volunteerclasses');
  }; // end registerUser
  // capture change on all the inputs and set that value to state
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }; // end handleInputChangeFor
  render() {
    return (
      <div className="volunteerRegisterDiv">
        <div className="overlay">
          <Card className="registerCard" onSubmit={this.registerUser}>
            <Spring
              from={{ opacity: 0, marginTop: -600 }}
              to={{ opacity: 1, marginTop: 0 }}
            >
              {(props) => (
                <div style={props}>
                  <Container
                    className="registerContainer"
                    component="main"
                    maxWidth="xs"
                  >
                    <CssBaseline />
                    <div className="volunteerRegisterPaper">
                      <Avatar className="volunteerRegisterAvatar" />
                      <Typography
                        className="volunteerRegisterTitle"
                        component="h1"
                        variant="h5"
                      >
                        Volunteer Registration
                      </Typography>
                      {/* {this.props.errors.registrationMessage && (
                  <h3
                    className="alert"
                    role="alert"
                  >
                    {this.props.errors.registrationMessage}
                  </h3>
                )} */}
                      <form className="volunteerRegisterForm" noValidate>
                        <TextField
                          margin="normal"
                          fullWidth
                          label="First Name"
                          autoFocus
                          type="text"
                          name="first_name"
                          value={this.state.first_name}
                          required
                          onChange={this.handleInputChangeFor('first_name')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          label="Last Name"
                          autoFocus
                          type="text"
                          name="last_name"
                          value={this.state.last_name}
                          required
                          onChange={this.handleInputChangeFor('last_name')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          label="Username"
                          autoFocus
                          type="text"
                          name="username"
                          value={this.state.username}
                          required
                          onChange={this.handleInputChangeFor('username')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={this.state.password}
                          required
                          onChange={this.handleInputChangeFor('password')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          label="Email"
                          autoFocus
                          type="text"
                          name="email"
                          id="email"
                          value={this.state.email}
                          required
                          onChange={this.handleInputChangeFor('email')}
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          label="Telephone"
                          autoFocus
                          type="text"
                          name="telephone"
                          value={this.state.telephone}
                          required
                          onChange={this.handleInputChangeFor('telephone')}
                        />

                        <Button
                          className="registerButton"
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          name="submit"
                          value="Register"
                        >
                          Register
                        </Button>
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
}

export default connect(mapStoreToProps)(
  withRouter(MobileVolunteerRegisterForm)
);
