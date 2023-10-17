const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route for inventory
  const queryText = `SELECT * FROM "inventory";`;

  pool.query(queryText)
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('Error in getting data from inventory', err);
    res.sendStatus(500)
  })
});



module.exports = router;