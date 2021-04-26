import React from 'react';
import { HashRouter as Router, NavLink } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Routing from './Router.js';
import './NavBar.css';

const styles = theme => ({
  title: {
    flexGrow: 1,
    paddingRight: '0px',
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <Grid container spacing={0}>
              <Grid item xs={3} key={1} />
              <Grid item xs={6} key={2}>
                <div style={{ textAlign: 'center', textAlignVertical: 'center', paddingTop: "6px", paddingBototm: "6px" }}>
                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                  >
                    <Router>
                      <NavLink activeClassName="active" to={"/"} type="menu" id="Title">
                        MySL
                </NavLink>

                    </Router>
                  </Typography>
                </div></Grid>
              <Grid item xs={3} key={3} >
                <div style={{ textAlign: 'right' }}>
                  <Router>
                    <NavLink to={"/upload/"} className="links" >
                      <Button color="inherit">Translate</Button>
                    </NavLink>
                    <NavLink to={"/customize/"} className="links" >
                      <Button color="inherit">Customize</Button>
                    </NavLink>
                    <NavLink to="/about" className="links" >
                      <Button color="inherit">About</Button>
                    </NavLink>
                  </Router>
                </div>
              </Grid>
            </Grid>



          </Toolbar>
        </AppBar>
        <main>
          <div />
          <Routing />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
