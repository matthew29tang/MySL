import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import './Pages.css';
import {
  NavLink
} from "react-router-dom";

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <h1>Welcome to MySL</h1>
        <Divider />
        <br />
        <NavLink activeClassName="active" className="link" to={"/upload/"} type="menu">
          <Button variant="contained" color="primary">
            Translate Audio
        </Button>
        </NavLink>
        <br /><br /><br />
        <NavLink activeClassName="active" className="link" to={"/customize/"} type="menu">
          <Button variant="contained" color="primary">
            Customize Translation
        </Button>
        </NavLink>
      </div>
    );
  }
}

export default Home;