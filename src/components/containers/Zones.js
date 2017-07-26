import React, { Component } from "react";
import Zone from "../presentationals/Zone";

class Zones extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      zone: {
        name: "",
        zipCodes: [],
        numComments: 0
      }
    };
  }

  updateZone(event) {
    console.log(
      "updateZone: " + event.target.id + " === " + event.target.value
    );
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[event.target.id] = event.target.value;
    this.setState({
      zone: updatedZone
    });
  }
  updateName(event) {
    // console.log("updateName " + event.target.value);
    const updatedZone = Object.assign({}, this.state.zone);
    updatedZone["name"] = event.target.value;
    this.setState({
      zone: updatedZone
    });
  }
  updateZipCodes(event) {
    // console.log("updateZipCodes " + event.target.value);
    const newZips = [];
    const zipArray = event.target.value.split(",");
    zipArray.forEach(zipCode => newZips.push(zipCode.trim()));
    const updatedZone = Object.assign({}, this.state.zone);
    updatedZone["zipCodes"] = newZips;
    this.setState({
      zone: updatedZone
    });
  }
  addZone() {
    console.log("submitZone " + JSON.stringify(this.state.zone, null, 2));
    const updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.zone);
    this.setState({
      list: updatedList
    });
  }
  render() {
    const listItems = this.state.list.map((zone, i) => {
      return (
        <li key={i}>
          <Zone currentZone={zone} />
        </li>
      );
    });
    return (
      <div>
        <ol>
          {listItems}
        </ol>
        <input
          onChange={this.updateName.bind(this)}
          id="name"
          className="form-control"
          type="text"
          placeholder="Name"
        />
        <input
          id="zipCodes"
          onChange={this.updateZipCodes.bind(this)}
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

export default Zones;
