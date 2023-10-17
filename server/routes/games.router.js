const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route for games
  console.log('req.user:', req.user)
  const queryText = `SELECT * FROM "games" WHERE "dm_id" = $1`
  pool.query(queryText, [req.user.id])
  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.log('Error in getting games data', err);
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const game = req.body;
  console.log('Creating game:', game)
  const queryText = `INSERT INTO "games" ("game_name", "dm_id")
  VALUES ($1, $2);`

  pool.query(queryText, [game.game_name, req.user.id])
  .then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    console.log('Error in adding game', err);
    res.sendStatus(500);
  });
});

module.exports = router;