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
    const queryText = `INSERT INTO "monsters" ("name", "size", "alignment", "armor_class", "hit_points", "speed", "resistances", "proficiency_bonus", "attacks", "game_id")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`

    pool.query(queryText, [monster.name, monster.size, monster.alignment, monster.armor_class, monster.hit_points, monster.speed, monster.resistances, monster.proficiency_bonus, monster.attacks, monster.game_id])
    .then(() => {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log("Error adding monster", err);
        res.sendStatus(500);
    })
});

router.delete("/:id", (req, res) => {
    //query to delete from players_inventory table
    const id = req.params.id;
    console.log(id)
    const queryText = `DELETE FROM "monsters" WHERE "id" = 1`;

    if (!id) {
        res.sendStatus(400);
        return;
    };

    pool.query(queryText, [id])
    .then(() => res.sendStatus(204))
    .catch((err) => {
        console.log('Error in DELETE from monsters table', err);
        res.sendStatus(500);
    })
})
module.exports = router;