const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route for /monsters
  const queryText = `SELECT * FROM "monsters";`;
  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log("Error in getting monster data", err);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route for /monsters
    const monster = req.body;
    console.log(monster);

});

module.exports = router;