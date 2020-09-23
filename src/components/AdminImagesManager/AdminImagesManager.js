import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import { Spring } from 'react-spring/renderprops';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '75%',
    height: '90%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function AdminImagesManager(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGES' });
  }, [dispatch]);

  const urlPrefix = `https://operisstorage.s3.us-east-2.amazonaws.com/`;

  const handleDelete = (s3_key) => {
    console.log('S3 Key: ', s3_key);

    dispatch({
      type: 'DELETE_IMAGE',
      payload: s3_key,
    });
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
          <ListSubheader component="div">Volunteer Photos</ListSubheader>
        </GridListTile>
        {props.store.imagesReducer.map((tile) => (
          <GridListTile key={tile.image_url}>
            <img src={tile.image_url} alt={tile.image_url} />
            <GridListTileBar
              title={tile.title}
              subtitle={
                <span>
                  Taken by: {tile.first_name} {tile.last_name}
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`photo from ${tile.title}`}
                  className={classes.icon}
                  onClick={() => handleDelete(tile.s3_key)}
                >
                  <DeleteIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

//   return (
//     <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
//       {(props) => (
//         <div style={props}>

//         </div>
//       )}
//     </Spring>
//   );
// }
export default connect(mapStoreToProps)(AdminImagesManager);
