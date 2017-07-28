import React, { Component } from "react";

class CreateZone extends Component {
  constructor() {
    super();
    this.state = {
      zone: {
        name: "",
        zipCodes: [],
      }
    };
  }
  updateZone(event) {
    const updatedZone = Object.assign({}, this.state.zone);
    updatedZone[event.target.id] = event.target.value;
    this.setState({
      zone: updatedZone
    });
  }
  addZone() {
    const updatedZone = Object.assign({}, this.state.zone);
    updatedZone["zipCodes"] = updatedZone.zipCodes.split(",");
    const newZips = [];
    updatedZone["zipCodes"].forEach(zipCode => newZips.push(zipCode.trim()));
    updatedZone["zipCodes"] = newZips;
    this.props.onCreate(updatedZone);
  }
  render() {
    return (
      <div>
        <input
          onChange={this.updateZone.bind(this)}
          id="name"
          className="form-control"
          type="text"
          placeholder="Name"
        />
        <input
          id="zipCodes"
          onChange={this.updateZone.bind(this)}
          className="form-control"
          type="text"
          placeholder="ZipCodes"
        />
        <button onClick={this.addZone.bind(this)} className="btn btn-danger">
          Add Zone
        </button>
      </div>
    );
  }
}

export default CreateZone;
