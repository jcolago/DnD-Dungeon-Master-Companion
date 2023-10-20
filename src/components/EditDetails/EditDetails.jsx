import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailViewItem from "../DetailViewItem/DetailViewItem";

export default function EditDetails() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    let [updatedPlayerInfo, setUpdatedPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: "" })

    const players = useSelector((store) => store.details)
    

    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYER_DETAILS', payload: id });
    }, []);

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
    const handleStrengthChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, strength: event.target.value })
    }
    const handleStrBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, str_bonus: event.target.value })
    }
    const handleStrSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, str_save: event.target.value })
    }
    const handleDexterityChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, dexterity: event.target.value })
    }
    const handleDexBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, dex_bonus: event.target.value })
    }
    const handleDexSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, dex_save: event.target.value })
    }
    const handleConstitutionChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, constitution: event.target.value })
    }
    const handleConBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, con_bonus: event.target.value })
    }
    const handleConSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, con_save: event.target.value })
    }
    const handleIntelligenceChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, intelligence: event.target.value })
    }
    const handleIntBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, int_bonus: event.target.value })
    }
    const handleIntSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, int_save: event.target.value })
    }
    const handleWisdomChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, wisdom: event.target.value })
    }
    const handleWisBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, wis_bonus: event.target.value })
    }
    const handleWisSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, wis_save: event.target.value })
    }
    const handleCharismaChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, charisma: event.target.value })
    }
    const handleChaBonusChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, cha_bonus: event.target.value })
    }
    const handleChaSaveChange = (event) => {
        console.log(event);
        setNewPlayerStats({ ...newPlayerStats, cha_save: event.target.value })
    }

    return (
        <div>
            {players.map(player => {
        return ( <div key={player.id}>
            <div>
                <img src={player.character_img} />
            </div>
            <div>
                <p>Player Name: {player.player_name}</p>
                <p>Character Name: {player.character_name}</p>
                <p>Character Level: {player.character_level}</p>
                <p>Current Hit Points: {player.current_hp}</p>
                <p>Total Hit Points: {player.total_hp}</p>
                <p>Armor Class: {player.armor_class}</p>
                <p>Speed: {player.speed}</p>
                <p>Initiative Bonus: {player.initiative_bonus}</p>
            </div>
            <div>
                <p>Strength: {player.strength} Bonus: {player.str_bonus}  Save: {player.str_save}</p>
                <p>Dexterity: {player.dexterity} Bonus: {player.dex_bonus}  Save: {player.dex_save}</p>
                <p>Constitution: {player.constitution} Bonus: {player.con_bonus}  Save: {player.con_save}</p>
                <p>Intelligence: {player.intelligence} Bonus: {player.int_bonus}  Save: {player.int_save}</p>
                <p>Wisdom: {player.wisdom} Bonus: {player.wis_bonus}  Save: {player.wis_save}</p>
                <p>Charisma: {player.charisma} Bonus: {player.cha_bonus}  Save: {player.cha_save}</p>
            </div>
            {player.quantity_items.map(item => {

                return (
                    <ul>
                        <DetailViewItem key={item.id} item={item} />
                    </ul>
                )
            })}
            <button>Edit</button>
            <button onClick={() => history.push('/players')}>Player List</button>
        </div>
        )
    })}
</div>
)

}