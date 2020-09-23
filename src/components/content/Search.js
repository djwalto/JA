import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));
export default function SearchAddRoleTalent(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [list, setList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        // searchQuery is what the user types in to search.
        setSearchQuery(event.target.value);
        // list is what is being searched through. It get's its data from a reducer.
        setList(
            // This is searching through an array of objects to see if the object.name 
            // matches the searchQuery.
            props.talentPool.filter((el) => el.name.includes(event.target.value))
        );
        setOpen(true);
    };
    const clickAway = () => {
        setSearchQuery('');
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };
    return (
        <Box className={classes.root} component="span">
            <Paper className={classes.paper}>
                <Box pt={0.5}>
                    <TextField
                        id="outlined-basic"
                        size="small"
                        value={searchQuery}
                        label="Search for talent"
                        variant="outlined"
                        autoComplete="off"
                        onBlur={clickAway}
                        onChange={handleSearchChange}
                    />
                </Box>
                <Box display={open ? 'block' : 'none'}>
                    <MenuList>
                        {list.slice(0, 5).map((item, index) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    onClick={props.handleTalentAssign(item.id)}
                                >
                                    {item.name}
                                </MenuItem>
                            );
                        })}
                    </MenuList>
                </Box>
            </Paper>
        </Box>
    );
}