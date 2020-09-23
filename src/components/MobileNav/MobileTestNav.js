import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MobileTestNav.css';

import { Dehaze, HomeOutlined } from '@material-ui/icons';
import {
  Drawer,
  Divider,
  MenuItem,
  MenuList,
  IconButton,
} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const muiStyles = (theme) =>
  createStyles({
    navDrawer: {
      width: 230,
    },
    navItem: {
      color: '#efefef',
    },
    navLink: {
      textDecoration: 'none',
      color: '#F2F2F2',
    },
    divider: {},
  });

class MobileTestNav extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const props = this.props;
    return (
      <>
        <div>
          <IconButton className="HamburgerIcon" label="dehaze drawer" onClick={this.handleOpen}>
            <Dehaze />
          </IconButton>

          {/* <h2 className="nav-title">Title</h2> */}
        </div>

        <Drawer anchor="left" open={this.state.open} onClose={this.handleClose}>
          <div className={this.props.classes.navDrawer}>
            <MenuList>
              <MenuItem>
                <IconButton>
                  <Link className="TestNavStyle" to="/volunteerhome">
                    <h6>Home</h6>
                  </Link>
                </IconButton>
              </MenuItem>
              <Divider />

              <MenuItem>
                <IconButton>
                  <Link className="TestNavStyle" to="/volunteerhome">
                    <h6>Scheduled Classes</h6>
                  </Link>
                </IconButton>
              </MenuItem>
              <Divider />
              <MenuItem>
                <IconButton>
                  <Link className="TestNavStyle" to="/volunteerclasses">
                    <h6>Programs</h6>
                  </Link>
                </IconButton>
              </MenuItem>
              <Divider />
              <MenuItem>
                <IconButton>
                  <Link className="TestNavStyle" to="/volunteerclasses/4">
                    <h6>Feedback</h6>
                  </Link>
                </IconButton>
              </MenuItem>
              <Divider />
              {/* Show the link to the info page and the logout button if the user is logged in */}
              {props.user.id && (
                <>
                  {/* <MenuItem className={this.props.classes.navItem} >
                                        <IconButton>
                                            <ThumbUpAltOutlined />
                                        </IconButton> */}

                  {/* </MenuItem> */}
                  <Divider />
                  <MenuItem className={this.props.classes.navItem}>
                    {/* <IconButton>
                                            <PersonOutline />
                                        </IconButton> */}
                    {/* <Link to="/profile" className={this.props.classes.navLink}>
                                            Profile
                  </Link> */}
                  </MenuItem>
                  <Divider />
                  <MenuItem></MenuItem>
                  <MenuItem className={this.props.classes.navItem}>
                    {/* <IconButton>
                                            <ExitToApp />
                                        </IconButton> */}
                    {/* <LogOutButton asLink className={this.props.classes.navLink} /> */}
                  </MenuItem>
                  <Divider />
                </>
              )}
              {/* Always show this link since the about page is not protected */}
            </MenuList>
          </div>
        </Drawer>
      </>
    );
  }
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(muiStyles)(MobileTestNav));
