import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerInfo() {
    const dispatch = useDispatch();
    const history = useHistory();

    let [newPlayerInfo, setNewPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "", character_level: 0, current_hp: 0, total_hp: 0, armor_class: 0, speed: 0, initiative_bonus: 0 })

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
    return (
        <div>
            <form>
                <input type="text" placeholder="" value={newPlayerInfo.player_name} onChange={handlePlayerNameChage} />
                <input type="text" placeholder="" value={newPlayerInfo.character_name} onChange={handleCharacterNameChage} />
                <input type="text" placeholder="" value={newPlayerInfo.character_img} onChange={handleCharacterImageChage} />
                <input type="text" placeholder="" value={newPlayerInfo.character_level} onChange={handleCharacterLevelChage} />
                <input type="text" placeholder="" value={newPlayerInfo.current_hp} onChange={handleCurrentHpChage} />
                <input type="text" placeholder="" value={newPlayerInfo.total_hp} onChange={handleTotalHpChage} />
                <input type="text" placeholder="" value={newPlayerInfo.armor_class} onChange={handleArmorClassChage} />
                <input type="text" placeholder="" value={newPlayerInfo.speed} onChange={handleSpeedChage} />
                <input type="text" placeholder="" value={newPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChage} />

            </form>
        </div>
    )
}