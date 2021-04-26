import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  NavLink
} from "react-router-dom";

import './Pages.css';

const styles = theme => ({
  card: {
    marginBottom: 20,
    padding: 9,
    paddingTop: 0,
    paddingBottom: 20,
    flexWrap: "wrap"
  },
  title: {
    fontSize: 14,
  },
  header: {
    fontSize: 18,
  },
  button: {
    fontSize: 13,
    marginRight: theme.spacing(1) * 2,
    marginLeft: theme.spacing(1) * 2,
  }
});

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: null
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="Results">
        <h1>Results</h1>
        <Divider />
        <br />
        <Grid container spacing={0}>
          <Grid item xs={5} key={1} >
            <center>
              <Box width="95%">
                <Card className={classes.card} style={{ 'whiteSpace': 'unset', 'wordWrap': 'break-word' }}>
                  <Typography className={classes.title}>
                    <h2>Transcription</h2>
                  </Typography>
                  {this.props.translation.transcription}
                </Card>
              </Box>
            </center>
          </Grid>
          <Grid item xs={7} key={2}>
            <center>
              <Box width="95%">
                <Card className={classes.card} style={{ 'whiteSpace': 'unset', 'wordWrap': 'break-word' }}>
                  <Typography className={classes.title}>
                    <h2>ASL</h2>
                  </Typography>
                  <Grid container spacing={0}>
                    {this.props.translation.asl.map((aslImage, i) =>
                      <Grid item xs={3} key={1} >
                        <Box width="95%">
                          <Card className={classes.card} style={{ 'whiteSpace': 'unset', 'wordWrap': 'break-word' }}>
                            <img src={aslImage} alt={i} height={100} />
                          </Card>
                        </Box>
                      </Grid>
                    )}</Grid>

                </Card>
              </Box>
            </center>
          </Grid>
        </Grid>
        <NavLink activeClassName="active" className="link" to={"/"} type="menu">
          <Button variant="contained" color="primary">
            Home
            </Button>
        </NavLink>
      </div>
    );
  }
}

export default withStyles(styles)(Results);