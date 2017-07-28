import React, { Component } from "react";
import { APIManager } from "../../utils/";
import { Comment, CreateComment } from "../presentationals/";
import styles from "./styles";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
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
  addComment(comment) {
    console.log('addComment: '+JSON.stringify(comment));
    APIManager.post("/api/comment", comment, (error, response) => {
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
          <CreateComment onCreate={this.addComment.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Comments;
