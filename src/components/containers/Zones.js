import React, { Component } from "react";
import { CreateZone, Zone } from "../presentationals/";
import { APIManager } from "../../utils/";

class Zones extends Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
      list: []
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
  addZone(zone) {
    APIManager.post("/api/zone", zone, (error, response) => {
      if (error) {
        console.log("Error " + JSON.stringify(error.message, null, 2));
        return;
      }
      const updatedList = Object.assign([], this.state.list);
      updatedList.push(response.result);

      this.setState({
        list: updatedList
      });
    });
  }
  selectZone(index) {
    // console.log('selectZone '+index);
    this.setState({
      selected: index,
    })
  }
  render() {
    const listItems = this.state.list.map((zone, i) => {
      const selected = (i === this.state.selected)
      return (
        <li key={i}>
          <Zone index={i} select={this.selectZone.bind(this)} isSelected={selected} currentZone={zone} />
        </li>
      );
    });
    return (
      <div>
        <ol>
          {listItems}
        </ol>
        <CreateZone onCreate={this.addZone.bind(this)} />
      </div>
    );
  }
}

export default Zones;
