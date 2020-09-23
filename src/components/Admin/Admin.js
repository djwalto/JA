import React from 'react';

// import AdminDash from "../AdminDash/AdminDash";
import AppDashboard from "../../AppDashboard";
import './Admin.css';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Admin = () => (
  <div className="container">
    <div>
      <AppDashboard />
    </div>
  </div>
);

export default Admin;
