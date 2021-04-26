import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


import About from "../About.js";
import Translate from "../Translate.js";
import Home from "../Home.js";
import Customize from "../Customize.js";

const styles = theme => ({
  root: {
    padding: theme.spacing(3, 2),
    overflowScrolling: "touch",
    WebkitOverflowScrolling: "touch",
  },
  appBarSpacer: theme.mixins.toolbar,
});

const routing = (
  <Router>
    <div className="Router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Translate} />
        <Route path="/customize" component={Customize} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  </Router>
);

class Routing extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
        <div className={classes.appBarSpacer} />
        <Box width="85%" maxWidth={1200}>
          <Paper className={classes.root}>
            {routing}
          </Paper>
        </Box>
        </Grid >
      </div>
    );
  }
}


export default withStyles(styles)(Routing);
