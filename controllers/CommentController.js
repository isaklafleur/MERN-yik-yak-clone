const Comment = require("../models/Comment");

module.exports = {
  find: (params, callback) => {
    Comment.find(params, (err, comments) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comments);
    });
  },
  findById: (id, callback) => {
    Comment.findById(id, (err, comment) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },
  create: (params, callback) => {
    Comment.create(params, (err, comment) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },
  update: (id, params, callback) => {
    Comment.findByIdAndUpdate(id, params, { new: true }, (err, comment) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, comment);
    });
  },
  delete: (id, callback) => {
    Comment.findOneAndRemove(id, err => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, null);
    });
  }
};
