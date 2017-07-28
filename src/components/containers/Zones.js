import React, { Component } from "react";
import Zone from "../presentationals/Zone";
import { APIManager } from "../../utils/";

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
  componentDidMount() {
    APIManager.get("/api/zone/", null, (error, response) => {
      if (error) {
        console.log("Error " + error.message);
        return;
      }
      this.setState({
        list: response.results
      });
    });
  }
  updateZone(event) {
    // console.log("updateZone: " + event.target.id + " === " + event.target.value);
    let updatedZone = Object.assign({}, this.state.zone);
    updatedZone[event.target.id] = event.target.value.trim();
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
    APIManager.post("/api/zone", updatedZone, (error, response) => {
      if (error) {
        console.log("Error " + error.message);
        return;
      }
      console.log("Zone Created: " + JSON.stringify(response));
      const updatedList = Object.assign([], this.state.list);
      updatedList.push(response.result);
      this.setState({
        list: updatedList,
      });
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

export default Zones;
