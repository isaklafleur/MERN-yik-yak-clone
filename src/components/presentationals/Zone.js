import React, { Component } from "react";
import styles from './styles';

class Zone extends Component {
  onSelectTitle(event) {
    event.preventDefault();
    // console.log('onSelectTitle ' + this.props.index);
    this.props.select(this.props.index);
  }
  render() {
    const zoneStyle = styles.zone;
    const title = this.props.isSelected ? <a style={zoneStyle.title} href="#">
            {this.props.currentZone.name}
          </a> : <a href="#">
            {this.props.currentZone.name}
          </a>;
    return (
      <div style={zoneStyle.container}>
        <h2 onClick={this.onSelectTitle.bind(this)} style={zoneStyle.marginBottom}>
          { title }
        </h2>
        <span className="detail">
          <ul>
          {this.props.currentZone.zipCodes.map((zipcode, i) => {
            return (
              <li key={i}>{zipcode}</li>
            );
          })}
          </ul>
          
        </span>
        <br />
        <span className="detail">{this.props.currentZone.numComments} comments</span>
      </div>
    );
  }
}

export default Zone;
