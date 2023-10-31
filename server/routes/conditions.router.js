const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route for conditions
    const queryText = `SELECT * FROM "conditions";`;

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('Error in getting conditions', err);
            res.sendStatus(500);
        })

});


router.post('/:id', (req, res) => {
    // POST route for players_conditions, add new condition to player with matching id
    const id = req.params.id
    const condition = req.body
    console.log("Adding condition for player with id:", id)
    const queryText = `INSERT INTO "players_conditions" ("condition_length", "condition_id", "player_id")
    VALUES ($1, $2, $3);`;

    pool.query(queryText, [condition.condition_length, condition.condition_id, id])
    .then(()=> {
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Error in updating player condition', err);
        res.sendStatus(500)
    })
});

router.put('/:id', (req, res)=> {
    //PUT route for players_conditions, sets a new condition to a player with matching player id
    const id = req.params.id
    console.log("Updating condition for player with id:", id)
    const updatedCondition = req.body
    const queryText = 'UPDATE "players_conditions" SET "condition_length" = $1, "condition_id" = $2 WHERE "player_id" = $3;';

    pool.query(queryText, [updatedCondition.condition_length, updatedCondition.condition_id, id])
    .then(() => {
        res.sendStatus(200)
    })
    .catch((err) => {
        console.log('Error in updating condition', err);
        res.sendStatus(500)
    })
})

router.delete("/", (req, res) => {
    //query to delete from players_conditions table
    const id = req.body.id
    console.log(id)
    const queryText = `DELETE FROM "players_conditions" WHERE "id" = $1`;

    if (!id) {
        res.sendStatus(400);
        return;
    };

    pool.query(queryText, [id])
        .then(() => res.sendStatus(204))
        .catch((err) => {
            console.log('Error in DELETE from players_conditions table table', err);
            res.sendStatus(500);
        })
});

router.put ("/", (req, res) => {
     //PUT route for players_conditions, updates the conditions length for player with matching condition id and player id.
    const id = req.body.id
    const length = req.body.length
    console.log(id);
    const queryText = `UPDATE "players_conditions" SET "condition_length" = $1 WHERE "id" = $2;`;

    if (!id) {
        res.sendStatus(400);
        return;
    };

    pool.query(queryText, [length, id])
    .then(() => res.sendStatus(200))
    .catch((err) => {
        console.log('Error updating condition length', err);
        res.sendStatus(500)
    })
})
module.exports = router;