import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import { Spring } from 'react-spring/renderprops';

import {
  Typography,
  Button,
  Modal,
  TextField,
  Fab,
  Box,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

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
    width: '80%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  root: {
    backgroundColor: '#4ac05d ',
    color: 'white',
    marginTop: '15px',
  },
}));

function VolunteerClassesModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_LEARNING_MATERIALS',
    });
  }, [dispatch]);
  const [modalStyle] = useState(VolunteerClassesModalStyle);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('');

  const {
    store: { projectDetails },
  } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const learning_materials = props.store.trainingReducer
    .filter((item) => {
      return item.program_id === props.programId;
    })
    .map((item, index) => {
      return (
        <Box p={1}>
          <a href={item.content}>{item.title}</a>
        </Box>
      );
    });
  console.log('training:', props.store.trainingReducer);
  console.log('learning_materials:', learning_materials);
  console.log('programId:', props.programId);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box p={3} display="inline">
        <Typography
          variant="h5"
          id="simple-modal-title"
          align="center"
          color="primary"
        >
          Select Training Material
        </Typography>
        {props.store.trainingReducer.length > 0 && learning_materials}
        <Typography
          variant="h6"
          id="simple-modal-title"
          align="center"
          color="primary"
        ></Typography>
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
        <Spring
          from={{ opacity: 0, marginBottom: -600 }}
          to={{ opacity: 1, marginBottom: 0 }}
        >
          {(props) => <div style={props}>{body}</div>}
        </Spring>
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(VolunteerClassesModal);
