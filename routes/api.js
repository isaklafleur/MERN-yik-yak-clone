const express = require('express');
const router = express.Router();
const ZoneController = require('../controllers/ZoneController');

router.get('/:resource', (req, res, next) => {
  const resource = req.params.resource

  if (resource === 'zone') {
    ZoneController.find(req.query, (err, results) => {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err,
        });
        return
      }
      res.json({
        confirmation: 'success',
        results,
      })
    })
  }
});

router.get('/:resource/:id', (req, res, next) => {
  const resource = req.params.resource
  const id = req.params.id;

  if (resource === 'zone') {
    ZoneController.findById(id, (err, result) => {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: 'Not Found'
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result
      })
    });
  }
})

router.post('/:resource/', (req, res, next) => {
  const resource = req.params.resource;
  if (resource === 'zone') {
    ZoneController.create(req.body, (err, result) => {
      if (err) {
        res.json({
          confirmation: 'fail',
          message: err,
        });
        return;
      }
      res.json({
        confirmation: 'success',
        result,
      })
    })
  }
})

module.exports = router;
