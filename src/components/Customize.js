import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
  NavLink
} from "react-router-dom";
import Dropzone from './Dropzone/Dropzone.js';
import Progress from './Progress/Progress.js';
import progress from './Progress/progress.svg';
import './Pages.css';

const BACKEND_URL = "http://localhost:8000"

class Customize extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      page: "customize",
      response: null
    };
    // Ping the backend so we can get it spinning
    fetch(BACKEND_URL);
  }

  onFilesAdded = (file) => {
    this.setState(prevState => ({
      files: prevState.files.concat(file)
    }), //this.uploadFiles(file[0])
    );
  }

  renderProgress = (file) => {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div id="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            id="CheckIcon"
            alt="done"
            src={progress}
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />

        </div>
      );
    }
  }

  uploadFiles = (file) => {
    this.setState({ uploadProgress: {}, uploading: true });
    try {
      var options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
      }
      this.sendRequest(file);
      this.setState({ successfullUploaded: true, uploading: false });
    } catch (e) {
      this.setState({ successfullUploaded: false, uploading: false });
    }
  }

  sendRequest = (file) => {
    const req = new XMLHttpRequest();

    req.upload.addEventListener("progress", event => {
      if (event.lengthComputable) {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = {
          state: "pending",
          percentage: (event.loaded / event.total) * 100
        };
        this.setState({ uploadProgress: copy });
      }
    });

    req.upload.addEventListener("load", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "done", percentage: 100 };
      this.setState({ uploadProgress: copy });
    });

    req.upload.addEventListener("error", event => {
      const copy = { ...this.state.uploadProgress };
      copy[file.name] = { state: "error", percentage: 0 };
      this.setState({ uploadProgress: copy });
    });

    const formData = new FormData();
    formData.append("image", file, "image");
    req.open("POST", BACKEND_URL);
    req.send(formData);
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        console.log(JSON.parse(req.response));
        this.storeResults(JSON.parse(req.response));
        this.nextPage();
      }
    }
  }

  nextPage = () => {
    this.setState({ page: "response" });
  }

  storeResults = (response) => {
    this.setState({ response });
    // Currently not doing anything with the response
  }

  editInput = (event) => {
    this.setState({ customizedWord: event.target.value });
  }

  render() {
    return (
      <div id="Customize">
        {this.state.page === "customize" ?
          <div>
            <h1>Customize</h1>
            <Divider />
            <h2>Select an image to upload!</h2>
            <br />
            <center>
              <Dropzone
                onFilesAdded={this.onFilesAdded}
                disabled={this.state.uploading || this.state.successfullUploaded}
                accept="image/*"
              />
            </center>
            <br />
            <br />
            {this.state.uploading ?
              <div id="Files">
                Uploading image...
            <br />
                {/*
            <div key={this.state.files.name} id="Row">
              {this.renderProgress(this.state.files)}
            </div>
            */}
              </div> : ""}

            <h2>Word to associate with</h2>
            <TextField id="standard-basic" label="Customization" onChange={(evt) => this.editInput(evt)} />
            <br /><br />
            <Button variant="contained" color="primary" onClick={() => this.uploadFiles(this.state.files[0])}>
              Upload Image
            </Button>
          </div> :
          <div>
            <h1>Customize</h1>
            <Divider />
            <h2>Upload successful!</h2>
            <NavLink activeClassName="active" className="link" to={"/"} type="menu">
              <Button variant="contained" color="primary">
                Home
            </Button>
            </NavLink>
          </div>}
      </div>

    );
  }
}

export default Customize;