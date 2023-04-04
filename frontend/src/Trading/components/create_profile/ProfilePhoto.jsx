import React, { Component } from "react";
import "./style/ProfilePhoto.css";
import PhotoUplaodIcon from "../../images/PhotoUploadIcon.png";

class ProfilePhoto extends Component {
  state = {
    fileURL: null,
  };

  onFileChange = (event) => {
    this.props.setProfilePhoto(event.target.files[0]);
    this.setState({
      fileURL: URL.createObjectURL(event.target.files[0]),
    });
  };

  renderPhotoUpload() {
    if (this.props.profilePhoto) {
      if (!this.state.fileURL) {
        this.setState({
          fileURL: URL.createObjectURL(this.props.profilePhoto),
        });
      }
      return (
        <div className="OuterDisplay">
          <label className="ReUpload">
            <p>Reupload</p>
            <input
              type="file"
              accept="image/*"
              onChange={this.onFileChange}
            ></input>
          </label>
          <div className="Display">
            <img src={this.state.fileURL} alt=""></img>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="PicHeader">Upload your photo</h1>
          <hr className="PicBar"></hr>
          <label className="FileUpload">
            <img className="Icon" src={PhotoUplaodIcon} alt="" />
            <input
              type="file"
              accept="image/*"
              onChange={this.onFileChange}
            ></input>
          </label>
        </div>
      );
    }
  }

  render() {
    return this.renderPhotoUpload();
  }
}

export default ProfilePhoto;
