import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import swal from 'sweetalert';

// MUI
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function AddClassModalTable(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_PROGRAMS',
    });
  }, [dispatch]);

  const rows = props.programs.map((item, index) => {
    return {
      title: item.title,
      sessions: item.sessions,
      program_id: item.id,
      assign: (
        <Button
          onClick={() => props.assignToVolunteer(item.id, props.user_id, 1)}
        >
          Assign
        </Button>
      ),
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Class Name</TableCell>
            <TableCell align="right">Number of Sessions</TableCell>
            <TableCell align="right">Assign</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.title}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.sessions}</TableCell>
              <TableCell align="right">{row.assign}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
