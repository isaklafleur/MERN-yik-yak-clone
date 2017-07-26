import React, { Component } from "react";
import axios from 'axios';
import Comment from "../presentationals/Comment";
import styles from "./styles";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      comment: {
        username: "",
        body: "",
        timestamp: ""
      }
    };
  }

  componentDidMount() {
    axios
    .get('/api/comment')
    .then(response => {
      const results = response.data.results;
      this.setState({
        list: results,
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  updateUsername(event) {
    // console.log('updateUsername ' + event.target.value);
    const updatedComment = Object.assign({}, this.state.comment);
    updatedComment["username"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  updateBody(event) {
    // console.log('updateComment ' + event.target.value);
    const updatedComment = Object.assign({}, this.state.comment);
    updatedComment["body"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  updateTimestamp(event) {
    const updatedComment = Object.assign({}, this.state.comment);
    updatedComment["timestamp"] = event.target.value;
    this.setState({
      comment: updatedComment
    });
  }

  submitComment() {
    console.log("submitComment " + JSON.stringify(this.state.comment, null, 2));
    const updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.comment);

    this.setState({
      list: updatedList
    });
  }

  render() {
    const style = styles.comment;
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}>
          <Comment currentComment={comment} />
        </li>
      );
    });
    return (
      <div>
        <h2>Comments: Zone 1</h2>
        <div style={style.commentsBox}>
          <ul style={style.commentsList}>
            {commentList}
          </ul>
          <input
            onChange={this.updateUsername.bind(this)}
            className="form-control"
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            onChange={this.updateBody.bind(this)}
            className="form-control"
            type="text"
            placeholder="Comment"
          />
          <br />
          <input
            onChange={this.updateTimestamp.bind(this)}
            className="form-control"
            type="text"
            placeholder="Timestamp"
          />
          <br />
          <button
            onClick={this.submitComment.bind(this)}
            className="btn btn-info"
          >
            Submit Comment
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
