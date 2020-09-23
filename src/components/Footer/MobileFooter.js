import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./MobileFooter.css";

// application footer
export default function MobileFooter() {
    return (
        <div >
            <AppBar position="static" className="footer">
                <Container maxWidth="md" className="container">
                    <Toolbar>
                        <Typography variant="body1" color="inherit" component="footer" className="root">
                            <h5 ><a className="links" href="https://github.com/djwalto" target="_blank" rel="noopener noreferrer">GitHub</a></h5>
                            <h5 ><a className="links" href="https://www.linkedin.com/in/davidwaltonkc/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                            <h5 ><a className="links" href="mailto:davidjwalton2020@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></h5>
                        </Typography>
                        <div className="copyright">
                            <h3 className="copy">    &copy; Junior Achievement of Greater Kansas City</h3>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};//