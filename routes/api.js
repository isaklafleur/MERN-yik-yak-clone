const express = require("express");
const router = express.Router();
const ZoneController = require("../controllers/ZoneController");
const controllers = require("../controllers");

// LIST
router.get("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request "+resource
    });
    return;
  }
  controller.find(req.query, (err, results) => {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      results
    });
  });
});

// SHOW 
router.get("/:resource/:id", (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;

  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request" + resource
    });
    return;
  }
  controller.findById(id, (err, result) => {
    if (err) {
      res.json({
        confirmation: "fail",
        message: "Not Found"
      });
      return;
    }
    res.json({
      confirmation: "success",
      result
    });
  });
});

// CREATE
router.post("/:resource/", (req, res, next) => {
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request" + resource
    });
    return;
  }
  controller.create(req.body, (err, result) => {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      result
    });
  });
});

// UPDATE
router.put("/:resource/:id", (req, res, next) => {
  const id = req.params.id;
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request" + resource
    });
    return;
  }
  controller.update(id, req.body, (err, result) => {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      result
    });
  });
});

// DELETE
router.delete("/:resource/:id", (req, res, next) => {
  const id = req.params.id;
  const resource = req.params.resource;
  const controller = controllers[resource];

  if (controller == null) {
    res.json({
      confirmation: "fail",
      message: "Invalid Resource Request" + resource
    });
    return;
  }
  controller.delete(id, (err) => {
    if (err) {
      res.json({
        confirmation: "fail",
        message: err
      });
      return;
    }
    res.json({
      confirmation: "success",
      message: resource+' has been removed',
    });
  });
});

module.exports = router;
