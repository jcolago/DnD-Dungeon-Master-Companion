const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route from players table
    const queryText = `SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_class, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed,
    "g".game_name, "g".dm_id,
            (SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pi".id, 'quantity',"pi".quantity, 'item_name', "i".item_name)) FROM "players_inventory" as "pi" JOIN "inventory" AS "i" ON 		"pi".inventory_id = "i".id WHERE "pi".player_id = "p".id) AS quantity_items,
            (SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pc".id, 'length', "pc".condition_length,  'condition_name', "c".condition_name)) FROM "players_conditions" as "pc"
             JOIN "conditions" AS "c" ON "pc".condition_id = "c".id WHERE "pc".player_id = "p".id) AS length_condition
    FROM "players" AS "p"
    JOIN "games" AS "g" ON "p".game_id = "g".id
    WHERE "g".dm_id = $1;
    `;

    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error getting data from database', err);
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
    // GET route for player details
    const id = req.params.id
    console.log('Getting player information with id:', id)
    const queryText = `SELECT "p".id, "p".player_name, "p".character_name, "p". character_img, "p".character_class, "p".character_level, "p".current_hp, "p".total_hp, "p".armor_class, "p".speed, "p".initiative_bonus, "p".strength, "p".str_bonus, "p".str_save, "p".dexterity, "p".dex_bonus, "p".dex_save, "p".constitution, "p".con_bonus, "p".con_save, "p".intelligence, "p".int_bonus, "p".int_save, "p".wisdom, "p".wis_bonus, "p".wis_save, "p".charisma, "p".cha_bonus, "p".cha_save, "p".displayed,
    "g".game_name, "g".dm_id,
            (SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pi".id, 'quantity',"pi".quantity, 'item_name', "i".item_name)) FROM "players_inventory" as "pi" JOIN "inventory" AS "i" ON 		"pi".inventory_id = "i".id WHERE "pi".player_id = "p".id) AS quantity_items,
            (SELECT JSON_AGG(JSON_BUILD_OBJECT('id', "pc".id, 'length', "pc".condition_length,  'condition_name', "c".condition_name)) FROM "players_conditions" as "pc"
             JOIN "conditions" AS "c" ON "pc".condition_id = "c".id WHERE "pc".player_id = "p".id) AS length_condition
    FROM "players" AS "p"
    JOIN "games" AS "g" ON "p".game_id = "g".id
    WHERE "g".dm_id = $1 AND "p".id = $2;
    `;

    pool.query(queryText, [req.user.id,id])
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
router.post('/', async (req, res) => {
    // POST route to players table
    try {
        const character = req.body;
        console.log(character);
        const queryText = `INSERT INTO "players" ("player_name", "character_name", "character_img", "character_level", "current_hp", "total_hp", "armor_class", "speed", "initiative_bonus", "strength", "str_bonus", "str_save", "dexterity", "dex_bonus", "dex_save", "constitution", "con_bonus", "con_save", "intelligence", "int_bonus", "int_save", "wisdom", "wis_bonus", "wis_save", "charisma", "cha_bonus", "cha_save", "game_id")
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28) RETURNING "id";`;

        const response1 = await pool.query(queryText, [character.player_name, character.character_name, character.character_img, character.character_level, character.current_hp, character.total_hp, character.armor_class, character.speed, character.initiative_bonus, character.strength, character.str_bonus, character.str_save, character.dexterity, character.dex_bonus, character.dex_save, character.constitution, character.con_bonus, character.con_save, character.intelligence, character.int_bonus, character.int_save, character.wisdom, character.wis_bonus, character.wis_save, character.charisma, character.cha_bonus, character.cha_save, character.game_id])

        console.log('Player id number:', response1.rows[0].id)
        const playerId = response1.rows[0].id
        const conditionsQuery = `INSERT INTO "players_conditions" ("condition_length", "condition_id", "player_id")
            VALUES ('0', '16', $1) RETURNING "player_id";`;

        const response2 = await pool.query(conditionsQuery, [playerId])

        console.log("Player id from conditions:", response2.rows[0].player_id)
        const consId = response2.rows[0].player_id
        const itemArray = character.item
        const itemsQuery = `INSERT INTO "players_inventory" ("quantity", "inventory_id", "player_id")
                VALUES ($1, $2, $3);
                `

        for (let i = 0; i < itemArray.length; i++) {
            await pool.query(itemsQuery, [itemArray[i].quantity, itemArray[i].item_id, consId])
        }

        res.sendStatus(201)

    } catch (err) {
        console.log('Error adding character', err);
        res.sendStatus(500);
    }

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

router.put("/:id", (req, res) => {
     const id = req.body.id
    console.log("PUT request to player with id", id);
    const updatedCharacter = req.body
    console.log('Updating character with:', updatedCharacter)
    const queryText = `UPDATE "players" SET "player_name" = $1, "character_name" = $2, "character_img" = $3, "character_level" = $4, "current_hp" = $5, "total_hp" = $6, "armor_class" = $7, "speed" = $8, "initiative_bonus" = $9, "strength" = $10, "str_bonus" = $11, "str_save" = $12, "dexterity" = $13, "dex_bonus" = $14, "dex_save" = $15, "constitution" = $16, "con_bonus" = $17, "con_save" = $18, "intelligence" = $19, "int_bonus" = $20, "int_save" = $21, "wisdom" = $22, "wis_bonus" = $23, "wis_save" = $24, "charisma" = $25, "cha_bonus" = $26, "cha_save" = $27  WHERE "id" = $28;`;

    pool.query(queryText, [updatedCharacter.player_name, updatedCharacter.character_name, updatedCharacter.character_img, updatedCharacter.character_level, updatedCharacter.current_hp, updatedCharacter.total_hp, updatedCharacter.armor_class, updatedCharacter.speed, updatedCharacter.initiative_bonus, updatedCharacter.strength, updatedCharacter.str_bonus, updatedCharacter.str_save, updatedCharacter.dexterity, updatedCharacter.dex_bonus, updatedCharacter.dex_save, updatedCharacter.constitution, updatedCharacter.con_bonus, updatedCharacter.con_save, updatedCharacter.intelligence, updatedCharacter.int_bonus, updatedCharacter.int_save, updatedCharacter.wisdom, updatedCharacter.wis_bonus, updatedCharacter.wis_save, updatedCharacter.charisma, updatedCharacter.cha_bonus, updatedCharacter.cha_save, id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('Error updating player', err);
            res.sendStatus(500);
        });
});

router.put('/display/:id', (req, res) =>{
    const id = req.params.id;
    console.log("Display request to player with id", id);
    const queryText = 'UPDATE "players" SET "displayed" = true WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("Error in setting character to displayed", err);
        res.sendStatus(500);
    });
});

router.put('/remove/:id', (req, res) =>{
    const id = req.params.id;
    console.log("Remove from display request to player with id", id);
    const queryText = 'UPDATE "players" SET "displayed" = false WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("Error in removing character from display", err);
        res.sendStatus(500);
    });
});

router.put('/' , (req, res) => {
    const updatedHp = req.body;
    console.log(updatedHp)
    console.log('Updating player hit points')
    const queryText = 'UPDATE "players" SET "current_hp" = $1 WHERE "id" = $2;';
    pool.query( queryText, [updatedHp.current_hp, updatedHp.player_id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('Error updating current hit points', err);
        res.sendStatus(500)
    })
})
module.exports = router;