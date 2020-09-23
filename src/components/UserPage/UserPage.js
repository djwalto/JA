import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './UserPage.css';
import TestNav from '../MobileNav/TestNav';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const scheduled_classes = this.props.store.volunteerScheduledClasses.map(
      (item, index) => {
        return (
          <div key={item.index}>
            <h3 id="welcome">{item.title}</h3>
            {/* <h5>{item.title}</h5> */}
            <h5>{item.name}</h5>
            <h5>Number of Sessions: {item.sessions}</h5>
          </div>
        );
      }
    );
    return (
      <div>
        <TestNav />
        <Container>
          <Paper className="VolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              {scheduled_classes}
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              {/* <p>Your scheduled classes are: {this.props.store.user.id}</p> */}
              <h2>Program Resources</h2>
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              <h2>Submit Class Details</h2>
            </Box>
          </Paper>
        </Container>
        <li>{scheduled_classes}</li>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
