const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed, JSON_AGG ("pi".quantity) AS "quantity", JSON_AGG ("i".item_name) AS "item_name", "pc".condition_length, "c".condition_name FROM "players" AS "p"
  JOIN  "players_inventory" AS "pi" ON "p".id = "pi".player_id
  JOIN "inventory" AS "i" ON "pi".inventory_id = "i".id
  JOIN  "players_conditions" AS "pc" ON "p".id = "pc".player_id
  JOIN "conditions" AS "c" ON "pc".condition_id = "c".id
  WHERE "p".id = '1'
  GROUP BY "p".id, "pc".condition_length, "c".condition_name;`;

  pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err =>{ 
    console.log('Error getting data from database', err);
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;