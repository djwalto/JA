import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';

class AdminRegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
  };

  render() {
    return (
      <div className="mainRegisterDiv">
        <RegisterForm />


      </div>
    );
  }
}

export default connect(mapStoreToProps)(AdminRegisterPage);
