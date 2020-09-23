import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Modal,
  TextField,
  Fab,
  Box,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import MobileReportForm from '../content/MobileReportForm/MobileReportForm';
import S3ImageUploader from '../S3ImageUploader/S3ImageUploader';
import { CenterFocusStrong } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
function VolunteerClassesModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: 'rgb(207, 206, 206)',
    width: 300,
    height: 600,
    // backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    overflow: 'auto',
  },
  box: {
    marginLeft: '15%',
    marginRight: '15%',
    overflow: 'auto',
    alignContent: 'center',
    backgroundColor: '#626366',
  },
  root: {
    // backgroundColor: theme.palette.success.main,
    backgroundColor: '#4ac05d ',
    color: 'white',
    margin: '10px',
    fontWeight: 'bold',
  },
  s3: {
    display: 'center',
    marginLeft: '15% !important',
  }
}));

function VolunteerClassesModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(VolunteerClassesModalStyle);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('');
  const history = useHistory();

  const {
    store: { projectDetails },
  } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    history.push('/volunteerhome');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <MobileReportForm classId={props.classId} />
      <Typography variant="h6"> Upload Images Below </Typography>
      <Box p={3} display="center">
        <S3ImageUploader className={classes.s3} classId={props.classId} programId={props.programId} />
      </Box>

      <Box p={3} display="inline">
        <Button
          variant="outlined"
          size="large"
          className={classes.root}
          onClick={handleSubmit}
        >
          Complete Class
        </Button>
      </Box>
      <Box p={3} display="inline">
        <Button
          variant="outlined"
          size="large"
          className={classes.root}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );

  return (
    <>
      <InfoIcon
        className="InfoIcon"
        onClick={open ? handleClose : handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        {body}
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(VolunteerClassesModal);
