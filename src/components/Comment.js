import React, { Component } from "react";
import styles from './styles';

class Comment extends Component {
  render() {
    const style = styles.comment;
    return (
      <div style={{ marginBottom: 16 }}>
        <p style={{fontSize: 20, fontWeight: 400}}>{this.props.currentComment.body}</p>
        <span style={style.username}>{this.props.currentComment.username}</span>
        <span style={style.pipe}>|</span>
        <span style={style.date}>{this.props.currentComment.timestamp}</span>
        <hr />
      </div>
    );
  }
}

export default Comment;
