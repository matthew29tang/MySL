import React from 'react';
import Upload from "./Upload.js";
import Results from "./Results.js";

import my from '../asl/my.png';
import name from '../asl/name.png';
import is from '../asl/is.png';
import m from '../asl/m.png';
import i from '../asl/i.png';
import k from '../asl/k.png';
import e from '../asl/e.png';

class Translate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "results",
      translation: { //Hardcoded for now
        transcription: "My name is Mike.",
        asl: [my, name, is, m, i, k, e
        ]
      }
    };
  }

  nextPage = () => {
    this.setState({ page: "results" });
  }

  storeResults = (translation) => {
    this.setState({translation});
  }

  render() {
    return (
      <div className="translate">
        {this.state.page === "upload" ?
          <Upload nextPage={this.nextPage} storeResults={this.storeResults}/> :
          <Results translation={this.state.translation}/>}
      </div>
    );
  }
}

export default Translate;