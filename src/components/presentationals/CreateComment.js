import React, { Component } from "react";

class CreateComment extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: '',
        body: '',
      }
    }
  }

  updateComment(event) {
    const updatedComment = Object.assign({}, this.state.comment);
    updatedComment[event.target.id] = event.target.value;
    this.setState({
      comment: updatedComment,
    });
  }

  addComment(event) {
    // console.log('submitComment '+JSON.stringify(this.state.comment));
    this.props.onCreate(this.state.comment);
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default CreateComment;
