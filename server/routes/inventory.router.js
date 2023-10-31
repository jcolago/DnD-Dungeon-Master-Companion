const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    // GET route for inventory, retuns the inventory list from the database for use in app
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

router.post("/:id", (req, res) => {
    //POST route for players_inventory table. Adds a new item to the matching player_id
    const id = req.params.id
    console.log("Adding to player inventory with id:", id)
    const item = req.body
    const itemsQuery = `INSERT INTO "players_inventory" ("quantity", "inventory_id", "player_id")
            VALUES ($1, $2, $3);`;

    pool.query(itemsQuery, [item.quantity, item.inventory_id, id])
        .then(() => { res.sendStatus(201) })

        .catch((err) => {
            console.log('Error adding to player inventory', err);
            res.sendStatus(500);
        })
})

router.delete("/", (req, res) => {
    //DELETE route for players_inventory, deletes the row that equals the id
    try {
        const id = req.body
        console.log(id)
        const queryText = `DELETE FROM "players_inventory" WHERE "id" = $1`

        if (!id) {
            res.sendStatus(400);
            return;
        };

        pool.query(queryText, [id.id])
        res.sendStatus(201)
    } catch (err) {
        console.log('Error deleting from player inventory', err);
        res.sendStatus(500);
    }
});

router.put("/", (req, res) => {
    //PUT route for players_inventory table. Updates the quantity of the entry with matching id
    const id = req.body.id
    const quantity = req.body.quantity
    console.log(id);
    const queryText = `UPDATE "players_inventory" SET "quantity" = $1 WHERE "id" = $2;`;

    if (!id) {
        res.sendStatus(400);
        return;
    };

    pool.query(queryText, [quantity, id])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log('Error updating condition length', err);
            res.sendStatus(500)
        })
})



module.exports = router;