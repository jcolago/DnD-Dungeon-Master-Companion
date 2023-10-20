import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playersInfo = useSelector((store) => store.playersInfo);
    const playerStats = useSelector((store) => store.stats);
    const item = useSelector((store) => store.backpack);
    const inventory = useSelector((store) => store.inventory)
    const characterObj = {...playersInfo, ...playerStats, item }
    console.log(playersInfo)
    console.log(characterObj)

    const submitCharacter = () => {
        dispatch({ type: "ADD_PLAYER", payload: characterObj})
    }

    

    return (
        <div>
            <div>
                <h2>Player Character Review</h2>
            </div>
            <div>
                <h3>Player Info</h3>
            </div>
            <div>
                    <div key={playersInfo.id}>
                        <p>Player Name: {playersInfo.player_name}</p>
                        <p>Character Name: {playersInfo.character_name}</p>
                        <p>Character Image: {playersInfo.character_img}</p>
                        <p>Character Lever: {playersInfo.character_level}</p>
                        <p>Current Hit Points: {playersInfo.current_hp}</p>
                        <p>Total Hit Points: {playersInfo.total_hp}</p>
                        <p>Armor Class: {playersInfo.armor_class}</p>
                        <p>Speed: {playersInfo.speed}</p>
                        <p>Initiative Bonus: {playersInfo.initiative_bonus}</p>
                    </div>
            </div>
            <div>
                <h3>Player Stats</h3>
            </div>
            <div>
                    <div>
                        <p>Strength: {playerStats.strength} Bonus: {playerStats.str_bonus}  Save: {playerStats.str_save}</p>
                        <p>Dexterity: {playerStats.dexterity} Bonus: {playerStats.dex_bonus}  Save: {playerStats.dex_save}</p>
                        <p>Constitution: {playerStats.constitution} Bonus: {playerStats.con_bonus}  Save: {playerStats.con_save}</p>
                        <p>Intelligence: {playerStats.intelligence} Bonus: {playerStats.int_bonus}  Save: {playerStats.int_save}</p>
                        <p>Wisdom: {playerStats.wisdom} Bonus: {playerStats.wis_bonus}  Save: {playerStats.wis_save}</p>
                        <p>Charisma: {playerStats.charisma} Bonus: {playerStats.cha_bonus}  Save: {playerStats.cha_save}</p>
                    </div>
            </div>
            <div>
                <h3>Inventory</h3>
            </div>
            <div>
            {item.map(backpackItem => {
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
            <button onClick={submitCharacter}>Submit Character</button>
        </div>
    )

}