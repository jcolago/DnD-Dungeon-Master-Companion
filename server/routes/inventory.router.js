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

router.post("/:id", async (req, res) => {
try {
    const id = req.params.id
    console.log("Adding to player inventory with id:", id)
    const itemArray = req.body
    const itemsQuery = `INSERT INTO "players_inventory" ("quantity", "inventory_id", "player_id")
            VALUES ($1, $2, $3);
            `

    for (let i = 0; i < itemArray.length; i++) {
        await pool.query(itemsQuery, [itemArray[i].quantity, itemArray[i].inventory_id, id])
    }
    res.sendStatus(201)
} catch (err) {
    console.log('Error adding to player inventory', err);
    res.sendStatus(500);
}
});

router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log("Removing from player inventory with id:", id)
        const itemsQuery = `INSERT INTO "players_inventory" ("quantity", "inventory_id", "player_id")
                VALUES ($1, $2, $3);
                `
    
        for (let i = 0; i < itemArray.length; i++) {
            await pool.query(itemsQuery, [itemArray[i].quantity, itemArray[i].inventory_id, id])
        }
        res.sendStatus(201)
    } catch (err) {
        console.log('Error adding to player inventory', err);
        res.sendStatus(500);
    }
    });




module.exports = router;