import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerInfo() {
    const dispatch = useDispatch();
    const history = useHistory();

    let [newPlayerInfo, setNewPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "" })

    const handlePlayerNameChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, player_name: event.target.value })
    }

    const handleCharacterNameChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_name: event.target.value })
    }

    const handleCharacterImageChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_img: event.target.value })
    }

    const handleCharacterLevelChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_level: event.target.value })
    }

    const handleCurrentHpChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, current_hp: event.target.value })
    }

    const handleTotalHpChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, total_hp: event.target.value })
    }

    const handleArmorClassChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, armor_class: event.target.value })
    }

    const handleSpeedChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, speed: event.target.value })
    }

    const handleInitiativeBonusChage = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, initiative_bonus: event.target.value })
    }

    const addNewPlayerInfo = (event) =>{
    event.preventDefault();
    console.log(newPlayerInfo)
    dispatch({ type: 'SET_PLAYERS', payload: newPlayerInfo})
    setNewPlayerInfo(({ player_name: "", character_name: "", character_img: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "" }))
    }
    return (
        <div>
            <form onSubmit={addNewPlayerInfo}>
                <input type="text" placeholder="Player Name" value={newPlayerInfo.player_name} onChange={handlePlayerNameChage} />
                <input type="text" placeholder="Character Name" value={newPlayerInfo.character_name} onChange={handleCharacterNameChage} />
                <input type="text" placeholder="Character Image URL" value={newPlayerInfo.character_img} onChange={handleCharacterImageChage} />
                <input type="number" placeholder="Character Level" value={newPlayerInfo.character_level} onChange={handleCharacterLevelChage} />
                <input type="number" placeholder="Character Current HP" value={newPlayerInfo.current_hp} onChange={handleCurrentHpChage} />
                <input type="number" placeholder="Character Total HP" value={newPlayerInfo.total_hp} onChange={handleTotalHpChage} />
                <input type="number" placeholder="Character Armor Class" value={newPlayerInfo.armor_class} onChange={handleArmorClassChage} />
                <input type="number" placeholder="Character Speed" value={newPlayerInfo.speed} onChange={handleSpeedChage} />
                <input type="number" placeholder="Character Initiative Bonus" value={newPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChage} />
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}