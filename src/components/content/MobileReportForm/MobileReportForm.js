import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import S3Page from '../../S3ImageUploader/S3Page';
import './MobileReportForm.css';
import TextField from '@material-ui/core/TextField';
import { Spring } from 'react-spring/renderprops';
import swal from 'sweetalert';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MobileReportForm extends Component {
  state = {
    class_size: '',
    scheduled_class_id: this.props.classId,

  };


  onCancelClick = (event) => {
    this.props.history.push(`/`); //NEED TO DECIDE
  };

  onSaveClick = (event) => {
    event.preventDefault();
    const dataForServer = this.state;
    console.log(dataForServer);

    this.props.dispatch({
      type: 'SUBMIT_CLASS_DETAILS',
      payload: dataForServer,
    });

    this.setState({
      class_size: ''
    })
    swal({
      title: "Great!",
      text: "Upload any Class pics below!",
      icon: "success",
      button: "Ok!",
    });

  };

  onSavePic = (event) => {
    event.preventDefault();

    //KENNY WILL NEED TO HELP ME WITH THIS
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {

    return (
      <Spring
        from={{ opacity: 0, marginTop: -600 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <div style={props}>
            <div className="formPanel">
              <form >
                <h1 className="ClassDetailsText">Class Completion</h1>
                <div>

                  <TextField id="outlined-basic" label="Outlined" variant="outlined" label='How many students?'
                    type="text"
                    name="class_size"
                    className="TextField"
                    value={this.state.class_size}
                    onChange={this.onInputChange('class_size')} />




                  <Button className="mobileReportFormButton" onClick={this.onSaveClick}>Save</Button>
                </div>
                <div>

                </div>
              </form>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(MobileReportForm));
