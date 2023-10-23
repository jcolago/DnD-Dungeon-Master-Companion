const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route for /monsters
    const queryText = `SELECT "m".id, "g".game_name, "g".dm_id, "m".name, "m".size, "m".alignment, "m".armor_class, "m".armor_class, "m".hit_points, "m".speed, "m".resistances, "m".proficiency_bonus, "m".attacks, "m".displayed FROM "games" AS "g"
  JOIN "monsters" AS "m" ON "g".id = "m".game_id
  WHERE "g".dm_id = $1;`;
    pool.query(queryText, [req.user.id])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log("Error in getting monster data", err);
            res.sendStatus(500)
        })
});

router.get('/:id', (req, res) => {
    // GET route for monster details
    const id = req.params.id;
    console.log('Getting details for monster with id:', id)
    const queryText = `SELECT "m".id, "g".game_name, "g".dm_id, "m".name, "m".size, "m".alignment, "m".armor_class, "m".armor_class, "m".hit_points, "m".speed, "m".resistances, "m".proficiency_bonus, "m".attacks, "m".displayed FROM "games" AS "g"
  JOIN "monsters" AS "m" ON "g".id = "m".game_id
  WHERE "g".dm_id = $1 AND "m".id = $2;`;
    pool.query(queryText, [req.user.id, id])
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
    const queryText = `DELETE FROM "monsters" WHERE "id" = $1`;

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
});

router.put("/id", (req, res) => {
    const id = req.params.id;
    const updatedMonster = req.body;
    console.log("Update request to moster with id:", id)
    console.log('Updated monster', updatedMonster)

    const queryText = `UPDATE "monsters" SET "name" = $1, "size" = $2, "alignment" = $3, "armor_class" = $4, "hit_points" = $5, "speed" = $6, "resistances" = $7, "proficiency_bonus" = $8, "attacks" = $9, "game_id" = $10 WHERE "id" = $11`

    pool.query(queryText, [updatedMonster.name, updatedMonster.size, updatedMonster.alignment, updatedMonster.armor_class, updatedMonster.hit_points, updatedMonster.speed, updatedMonster.resistances, updatedMonster.proficiency_bonus, updatedMonster.attacks, updatedMonster.game_id, id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            console.log('Error updating monster', err);
            res.sendStatus(500);
        });
});

router.put('/display/:id', (req, res) =>{
    const id = req.params.id;
    console.log("Display request to monster with id", id);
    const queryText = 'UPDATE "monsters" SET "displayed" = true WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("Error in setting monster to displayed", err);
        res.sendStatus(500);
    });
});

router.put('/remove/:id', (req, res) =>{
    const id = req.params.id;
    console.log("Remove from display request to monster with id", id);
    const queryText = 'UPDATE "monsters" SET "displayed" = false WHERE "id" = $1;';
    pool.query(queryText, [id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log("Error in removing monster from display", err);
        res.sendStatus(500);
    });
});


module.exports = router;