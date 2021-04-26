import React from 'react';
import Divider from '@material-ui/core/Divider';
import './Pages.css';

class About extends React.Component {

  render() {
    return (
      <div className="About">
        <h1>About</h1>
        <Divider />
        <br/>
        Description here
      </div>
    );
  }
}

export default About;