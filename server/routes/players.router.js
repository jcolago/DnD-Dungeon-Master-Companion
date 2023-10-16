const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route from players table
    const queryText = `SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed, JSON_AGG ("pi".quantity) AS "quantity", JSON_AGG ("i".item_name) AS "item_name", "pc".condition_length, "c".condition_name FROM "players" AS "p"
  JOIN  "players_inventory" AS "pi" ON "p".id = "pi".player_id
  JOIN "inventory" AS "i" ON "pi".inventory_id = "i".id
  JOIN  "players_conditions" AS "pc" ON "p".id = "pc".player_id
  JOIN "conditions" AS "c" ON "pc".condition_id = "c".id
  GROUP BY "p".id, "pc".condition_length, "c".condition_name;`;

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error getting data from database', err);
            res.sendStatus(500)
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route to players table
    const character = req.body;
    console.log(character);
    const queryText = `INSERT INTO "players" ("player_name", "character_name", "character_img", "character_level", "current_hp", "total_hp", "armor_class", "speed", "initiative_bonus", "strength", "str_bonus", "str_save", "dexterity", "dex_bonus", "dex_save", "constitution", "con_bonus", "con_save", "intelligence", "int_bonus", "int_save", "wisdom", "wis_bonus", "wis_save", "charisma", "cha_bonus", "cha_save", "game_id")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28);`;

    pool.query(queryText, [character.player_name, character.character_name, character.character_img, character.character_level, character.current_hp, character.total_hp, character.armor_class, character.speed, character.initiative_bonus, character.strength, character.str_bonus, character.str_save, character.dexterity, character.dex_bonus, character.dex_save, character.constitution, character.con_bonus, character.con_save, character.intelligence, character.int_bonus, character.int_save, character.wisdom, character.wis_bonus, character.wis_save, character.charisma, character.cha_bonus, character.cha_save, character.game_id])
        .then(() => {
            res.sendStatus(201)
        })
        .catch((err) => {
            console.log('Error adding character', err);
            res.sendStatus(500);
        });
});

router.delete("/:id", (req, res) => {
    //query to delete from players_inventory table
    const id = req.params.id;
    console.log(id)
    const inventoryText = `DELETE FROM "players_inventory" WHERE "player_id" = $1 RETURNING "player_id";`;

    if (!id) {
        res.sendStatus(400);
        return;
    };

    pool.query(inventoryText, [id])
        .then(result => {
            //query to delete from players_conditions table
            console.log("player id:", result.rows[0].player_id);
            const inventoryId = result.rows[0].player_id;
            const conditionText = `DELETE FROM "players_conditions" WHERE "player_id" = $1 RETURNING "player_id";`;
            pool.query(conditionText, [inventoryId])

                .then(result => {
                    //query to delete from players table
                    console.log("player id from conditions:", result.rows[0].player_id);
                    const conditionsId = result.rows[0].player_id;
                    const deleteText = `DELETE FROM "players" WHERE "id" = $1;`;
                    pool.query(deleteText, [conditionsId])
                        .then(() => res.sendStatus(204))
                        //catch for third query
                        .catch((err) => {
                            console.log('Error DELETING from players table', err);
                            res.sendStatus(500);
                        })
                })
                //catch for second query
                .catch((err) => {
                    console.log('Error DELETing from players_conditions table', err);
                    res.sendStatus(500)
                })
        })
        //Catch for first query
        .catch((err) => {
            console.log('Error in DELETing from players_inventory table', err);
            res.sendStatus(500)
        })
})

module.exports = router;