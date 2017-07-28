import React, { Component } from "react";
import { APIManager } from "../../utils/";
import Comment from "../presentationals/Comment";
import styles from "./styles";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      comment: {
        username: "",
        body: ""
      }
    };
  }
  componentDidMount() {
    APIManager.get("/api/comment", null, (error, response) => {
      if (error) {
        console.log("Error " + error.message);
        return;
      }
      this.setState({
        list: response.results
      });
    });
  }
  updateComment(event) {
    console.log(
      "updateComment: " + event.target.id + " === " + event.target.value
    );
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment[event.target.id] = event.target.value.trim();
    this.setState({
      comment: updatedComment
    });
  }
  addComment() {
    APIManager.post("/api/comment", this.state.comment, (error, response) => {
      if (error) {
        console.log("Error " + JSON.stringify(error.message, null, 2));
        return;
      }
      const updatedList = Object.assign([], this.state.list);
      updatedList.push(response.result);
      this.setState({
        list: updatedList,
      });
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
            id="username"
            onChange={this.updateComment.bind(this)}
            className="form-control"
            type="text"
            placeholder="Username"
          />
          <br />
          <input
            id="body"
            onChange={this.updateComment.bind(this)}
            className="form-control"
            type="text"
            placeholder="Comment"
          />
          <br />
          <button onClick={this.addComment.bind(this)} className="btn btn-info">
            Add Comment
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
