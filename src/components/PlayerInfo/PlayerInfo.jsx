import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerInfo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const games = useSelector((state) => state.games)
    console.log(games)

    let [newPlayerInfo, setNewPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "",
    character_class: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", game_id: "" })

    const handlePlayerNameChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, player_name: event.target.value })
    }

    const handleCharacterNameChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_name: event.target.value })
    }

    const handleCharacterImageChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_img: event.target.value })
    }

    const handleCharacterClassChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_class: event.target.value })
    }

    const handleCharacterLevelChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_level: event.target.value })
    }

    const handleCurrentHpChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, current_hp: event.target.value })
    }

    const handleTotalHpChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, total_hp: event.target.value })
    }

    const handleArmorClassChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, armor_class: event.target.value })
    }

    const handleSpeedChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, speed: event.target.value })
    }

    const handleInitiativeBonusChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, initiative_bonus: event.target.value })
    }

    const handleGameChange = (event) => {
        console.log(event)
        setNewPlayerInfo({ ...newPlayerInfo, game_id: event.target.value})
    }

    const addNewPlayerInfo = (event) => {
        event.preventDefault();
        console.log(newPlayerInfo)
        dispatch({ type: 'SET_PLAYERS_INFO', payload: newPlayerInfo })
        setNewPlayerInfo({ player_name: "", character_name: "", character_img: "", character_class: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", game_id: "" });
        history.push("/stats")
    }

    return (
        <div>
            <form onSubmit={addNewPlayerInfo}>
                <input type="text" placeholder="Player Name" value={newPlayerInfo.player_name} onChange={handlePlayerNameChange} />
                <input type="text" placeholder="Character Name" value={newPlayerInfo.character_name} onChange={handleCharacterNameChange} />
                <input type="text" placeholder="Character Image URL" value={newPlayerInfo.character_img} onChange={handleCharacterImageChange} />
                <input type="text" placeholder="Character Class" value={newPlayerInfo.character_class} onChange={handleCharacterClassChange} />
                <input type="number" placeholder="Character Level" value={newPlayerInfo.character_level} onChange={handleCharacterLevelChange} />
                <input type="number" placeholder="Character Current HP" value={newPlayerInfo.current_hp} onChange={handleCurrentHpChange} />
                <input type="number" placeholder="Character Total HP" value={newPlayerInfo.total_hp} onChange={handleTotalHpChange} />
                <input type="number" placeholder="Character Armor Class" value={newPlayerInfo.armor_class} onChange={handleArmorClassChange} />
                <input type="number" placeholder="Character Speed" value={newPlayerInfo.speed} onChange={handleSpeedChange} />
                <input type="number" placeholder="Character Initiative Bonus" value={newPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChange} />
                <select onChange={handleGameChange} value={newPlayerInfo.game_id} name="game-name" id="game-name">
                <option value="" disabled>Please select a game name</option>
                {games.map(game => {
                    return (<option value={game.id} key={game.id} >{game.game_name}</option>
                    )
                })}
                </select>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}