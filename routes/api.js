const express = require('express');
const router = express.Router();

router.get('/:resource', (req, res, next) => {
  const resource = req.params.resource
  res.json({
    confirmation: 'success',
    resource
  });
})

module.exports = router;
