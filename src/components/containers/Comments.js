import React, { Component } from "react";
import Comment from "../presentationals/Comment";
import styles from './styles';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        { username: "Pelle", body: "sdsdsdsdsbvbvbdsd", timestamp: "10:30" },
        { username: "Kalle", body: "sdsdsdsdsdssds2323rd", timestamp: "11:30" },
        { username: "Putte", body: "sdsd34334sdsdsdsd", timestamp: "10:34" },
        { username: "Dino", body: "ssdsddsdsdsdsdsd", timestamp: "14:30" }
      ]
    };
  }
  submitComment() {
    console.log('submitComment');
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
            { commentList }
          </ul>
          <input className="form-control" type="text" placeholder="Username" /><br />
          <input className="form-control" type="text" placeholder="Comment" /><br />
          <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
        </div>
      </div>
    );
  }
}

export default Comments;
