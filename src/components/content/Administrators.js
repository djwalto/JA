import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Spring } from 'react-spring/renderprops';

import swal from 'sweetalert';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { CSVLink } from 'react-csv';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'username', numeric: false, disablePadding: true, label: 'Username' },
  {
    id: 'first name',
    numeric: false,
    disablePadding: true,
    label: 'First Name',
  },
  { id: 'last name', numeric: false, disablePadding: true, label: 'Last Name' },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email Address',
  },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Phone Number' },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all names' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const dispatch = useDispatch();

  const addAdmin = () => {
    swal('What is the email address you would like to send invite to?', {
      content: 'input',
    }).then((value) => {
      dispatch({
        type: 'INVITE_USER',
        payload: { email: value, account_type_id: 1 },
      });
      console.log(value);
      swal(`Your invite has been sent to: ${value}`);
    });
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
          <Typography
            className={classes.title}
            variant="h5"
            id="tableTitle"
            component="div"
          >
            Administrators
          </Typography>
        )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <Tooltip title="Add New Admin">
            <IconButton aria-label="invite admin">
              <AddCircleIcon onClick={addAdmin} />
            </IconButton>
          </Tooltip>
        )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  search: {
    width: 250,
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'off',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

function Administrators(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('completion');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_ADMIN' });
  }, [dispatch]);

  const adminList = props.store.adminList.map((item, index) => {
    return {
      username: item.username,
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      phone: item.telephone,
    };
  });

  function CSV(data) {
    return (
      <div>
        <CSVLink className="csvLink" data={adminList}>
          Export to CSV
        </CSVLink>
      </div>
    );
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = adminList.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, adminList.length - page * rowsPerPage);

  // function SearchAdministrators(props) {
  //   const classes = useStyles();
  //   const [open, setOpen] = useState(false);
  //   const [list, setList] = useState([]);
  //   const [searchQuery, setSearchQuery] = useState('');
  //   const handleSearchChange = (event) => {
  //     // searchQuery is what the user types in to search.
  //     setSearchQuery(event.target.value);
  //     // list is what is being searched through. It get's its data from a reducer.
  //     // setList(
  //     //   // This is searching through an array of objects to see if the object.name
  //     //   // matches the searchQuery.
  //     //   props.talentPool.filter((el) => el.name.includes(event.target.value))
  //     // );
  //     setOpen(true);
  //   };
  //   const clickAway = () => {
  //     setSearchQuery('');
  //     setTimeout(() => {
  //       setOpen(false);
  //     }, 100);
  //   };
  //   return (
  //     <Box className={classes.box} component="span">
  //       <Paper className={classes.paper}>
  //         <Box pt={0.5}>
  //           <TextField
  //             className={classes.search}
  //             id="outlined-basic"
  //             size="small"
  //             value={searchQuery}
  //             label="Search"
  //             variant="outlined"
  //             autoComplete="off"
  //             onBlur={clickAway}
  //             onChange={handleSearchChange}
  //           />
  //         </Box>
  //         <Box display={open ? 'block' : 'none'}>
  //           {/* <MenuList>
  //             {list.slice(0, 5).map((item, index) => {
  //               return (
  //                 <MenuItem
  //                   key={item.id}
  //                   onClick={props.handleTalentAssign(item.id)}
  //                 >
  //                   {item.name}
  //                 </MenuItem>
  //               );
  //             })}
  //           </MenuList> */}
  //         </Box>
  //       </Paper>
  //     </Box>
  //   );
  // }
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(props) => (
        <div style={props}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <EnhancedTableToolbar numSelected={selected.length} />
              <TableContainer>
                {/* <SearchAdministrators /> */}
                <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  aria-label="enhanced table"
                >
                  <EnhancedTableHead
                    classes={classes}
                    numSelected={selected.length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={adminList.length}
                  />
                  <TableBody>
                    {stableSort(adminList, getComparator(order, orderBy))
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row, index) => {
                        const isItemSelected = isSelected(row.name);
                        const labelId = `enhanced-table-checkbox-${index}`;

                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                          >
                            <TableCell padding="checkbox">
                              <Checkbox
                                onClick={(event) =>
                                  handleClick(event, row.name)
                                }
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                              />
                            </TableCell>
                            <TableCell
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                            >
                              {row.username}
                            </TableCell>

                            <TableCell align="left">{row.first_name}</TableCell>
                            <TableCell align="left">{row.last_name}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left">{row.phone}</TableCell>
                          </TableRow>
                        );
                      })}
                    {emptyRows > 0 && (
                      <TableRow
                        style={{ height: (dense ? 33 : 53) * emptyRows }}
                      >
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"

                count={adminList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
              <CSV />
            </Paper>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default connect(mapStoreToProps)(Administrators);
