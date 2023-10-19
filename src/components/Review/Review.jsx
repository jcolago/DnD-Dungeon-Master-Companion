import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playerInfo = useSelector((store) => store.playerInfo);
    const stats = useSelector((store) => store.stats);
    const backpack = useSelector((store) => store.backpack);
    const inventory = useSelector((store) => store.inventory)

    return (
        <div>
            <div>
                <h2>Player Character Review</h2>
            </div>
            <div>
                <h3>Player Info</h3>
            </div>
            <div>
                {playerInfo.map(playerInfo => {
                    <div key={playerInfo.id}>
                        <p>Player Name: {playerInfo.name}</p>
                        <p>Character Name: {playerInfo.character_name}</p>
                        <p>Character Image: {playerInfo.character_img}</p>
                        <p>Character Lever: {playerInfo.character_level}</p>
                        <p>Current Hit Points: {playerInfo.current_hp}</p>
                        <p>Total Hit Points: {playerInfo.total_hp}</p>
                        <p>Armor Class: {playerInfo.armor_class}</p>
                        <p>Speed: {playerInfo.speed}</p>
                        <p>Initiative Bonus: {playerInfo.initiative_bonus}</p>
                    </div>
                })}
            </div>
            <div>
                <h3>Player Stats</h3>
            </div>
            <div>
                {stats.map(playerStats => {
                    <div>
                        <p>Strength: {playerStats.strength} Bonus: {playerStats.str_bonus}  Save: {playerStats.str_save}</p>
                        <p>Dexterity: {playerStats.dexterity} Bonus: {playerStats.dex_bonus}  Save: {playerStats.dex_save}</p>
                        <p>Constitution: {playerStats.constitution} Bonus: {playerStats.con_bonus}  Save: {playerStats.con_save}</p>
                        <p>Intelligence: {playerStats.intelligence} Bonus: {playerStats.int_bonus}  Save: {playerStats.int_save}</p>
                        <p>Wisdom: {playerStats.wisdom} Bonus: {playerStats.wis_bonus}  Save: {playerStats.wis_save}</p>
                        <p>Charisma: {playerStats.charisma} Bonus: {playerStats.cha_bonus}  Save: {playerStats.cha_save}</p>
                    </div>
                })}
            </div>
            <div>
                <h3>Inventory</h3>
            </div>
            <div>
            {backpack.map(backpackItem => {
                console.log(backpackItem);
                console.log(inventory)
                let item = inventory.find(inventoryItem => Number(inventoryItem.id) === Number(backpackItem.item_id));
                console.log(item)
                return (
                    <div key={backpackItem.item_id}>
                        <p>Quantity: {backpackItem.quantity} </p>
                        <p>Item: {item.item_name}</p>
                    </div>
                )
            })}
            </div>
            <button>Submit Character</button>
        </div>
    )

}