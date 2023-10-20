import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailViewItem from "../DetailViewItem/DetailViewItem";

export default function EditDetails() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    const players = useSelector((store) => store.details)
    console.log(id)


    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYER_DETAILS', payload: id });
    }, []);

    const [updatedPlayerInfo, setUpdatedPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: "" })

  



    useEffect(() => {
        setUpdatedPlayerInfo({ player_name: players[0].player_name, character_name: players[0].character_name, character_img: players[0].character_img, character_level: players[0].character_level, current_hp: players[0].current_hp, total_hp: players[0].total_hp, armor_class: players[0].armor_class, speed: players[0].speed, initiative_bonus: players[0].initiative_bonus, strength: players[0].strength, str_bonus: players[0].str_bonus, str_save: players[0].str_save, dexterity: players[0].dexterity, dex_bonus: players[0].dex_bonus, dex_save: players[0].dex_save, constitution: players[0].constitution, con_bonus: players[0].con_bonus, con_save: players[0].con_save, intelligence: players[0].intelligence, int_bonus: players[0].int_bonus, int_save: players[0].int_save, wisdom: players[0].wisdom, wis_bonus: players[0].wis_bonus, wis_save: players[0].wis_save, charisma: players[0].charisma, cha_bonus: players[0].cha_bonus, cha_save: players[0].cha_save })
    }, [players])

    const handlePlayerNameChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, player_name: event.target.value })
    }
    const handleCharacterNameChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({  ...updatedPlayerInfo, character_name: event.target.value })
    }
    const handleCharacterImageChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, character_img: event.target.value })
    }
    const handleCharacterLevelChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({...updatedPlayerInfo, character_level: event.target.value })
    }
    const handleCurrentHpChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, current_hp: event.target.value })
    }
    const handleTotalHpChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, total_hp: event.target.value })
    }
    const handleArmorClassChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, armor_class: event.target.value })
    }
    const handleSpeedChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, speed: event.target.value })
    }
    const handleInitiativeBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, initiative_bonus: event.target.value })
    }
    const handleStrengthChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, strength: event.target.value })
    }
    const handleStrBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, str_bonus: event.target.value })
    }
    const handleStrSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, str_save: event.target.value })
    }
    const handleDexterityChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, dexterity: event.target.value })
    }
    const handleDexBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, dex_bonus: event.target.value })
    }
    const handleDexSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, dex_save: event.target.value })
    }
    const handleConstitutionChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, constitution: event.target.value })
    }
    const handleConBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, con_bonus: event.target.value })
    }
    const handleConSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, con_save: event.target.value })
    }
    const handleIntelligenceChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, intelligence: event.target.value })
    }
    const handleIntBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, int_bonus: event.target.value })
    }
    const handleIntSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, int_save: event.target.value })
    }
    const handleWisdomChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, wisdom: event.target.value })
    }
    const handleWisBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, wis_bonus: event.target.value })
    }
    const handleWisSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, wis_save: event.target.value })
    }
    const handleCharismaChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, charisma: event.target.value })
    }
    const handleChaBonusChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, cha_bonus: event.target.value })
    }
    const handleChaSaveChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({ ...updatedPlayerInfo, cha_save: event.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(),
            dispatch({ type: 'UPDATE_CHARACTER', payload:  {id: id, ...updatedPlayerInfo} })
        console.log(updatedPlayerInfo)
        console.log(id)
    }
console.log(updatedPlayerInfo)
    return (
        <div>
            <div key={updatedPlayerInfo.id}>
                    <div>
                        <img src={updatedPlayerInfo.character_img} />
                    </div>
                    <div>
                        <h3>Update Player Info</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder={updatedPlayerInfo.player_name} value={updatedPlayerInfo.player_name} onChange={handlePlayerNameChange} />
                            <input type="text" placeholder={updatedPlayerInfo.character_name} value={updatedPlayerInfo.character_name} onChange={handleCharacterNameChange} />
                            <input type="text" placeholder={updatedPlayerInfo.character_img} value={updatedPlayerInfo.character_img} onChange={handleCharacterImageChange} />
                            <input type="number" placeholder={updatedPlayerInfo.character_level} value={updatedPlayerInfo.character_level} onChange={handleCharacterLevelChange} />
                            <input type="number" placeholder={updatedPlayerInfo.current_hp} value={updatedPlayerInfo.current_hp} onChange={handleCurrentHpChange} />
                            <input type="number" placeholder={updatedPlayerInfo.total_hp} value={updatedPlayerInfo.total_hp} onChange={handleTotalHpChange} />
                            <input type="number" placeholder={updatedPlayerInfo.armor_class} value={updatedPlayerInfo.armor_class} onChange={handleArmorClassChange} />
                            <input type="number" placeholder={updatedPlayerInfo.speed} value={updatedPlayerInfo.speed} onChange={handleSpeedChange} />
                            <input type="number" placeholder={updatedPlayerInfo.initiative_bonus} value={updatedPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChange} />
                            <br />
                            <hr />
                            <h3>Update Player Stats</h3>
                            <input type="number" placeholder={updatedPlayerInfo.strength} value={updatedPlayerInfo.strength} onChange={handleStrengthChange} />
                            <input type="number" placeholder={updatedPlayerInfo.str_bonus} value={updatedPlayerInfo.str_bonus} onChange={handleStrBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.str_save} value={updatedPlayerInfo.str_save} onChange={handleStrSaveChange} />
                            <input type="number" placeholder={updatedPlayerInfo.dexterity} value={updatedPlayerInfo.dexterity} onChange={handleDexterityChange} />
                            <input type="number" placeholder={updatedPlayerInfo.dex_bonus} value={updatedPlayerInfo.dex_bonus} onChange={handleDexBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.dex_save} value={updatedPlayerInfo.dex_save} onChange={handleDexSaveChange} />
                            <input type="number" placeholder={updatedPlayerInfo.constitution} value={updatedPlayerInfo.constitution} onChange={handleConstitutionChange} />
                            <input type="number" placeholder={updatedPlayerInfo.con_bonus} value={updatedPlayerInfo.con_bonus} onChange={handleConBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.con_save} value={updatedPlayerInfo.con_save} onChange={handleConSaveChange} />
                            <input type="number" placeholder={updatedPlayerInfo.intelligence} value={updatedPlayerInfo.intelligence} onChange={handleIntelligenceChange} />
                            <input type="number" placeholder={updatedPlayerInfo.int_bonus} value={updatedPlayerInfo.int_bonus} onChange={handleIntBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.int_save} value={updatedPlayerInfo.int_save} onChange={handleIntSaveChange} />
                            <input type="number" placeholder={updatedPlayerInfo.wisdom} value={updatedPlayerInfo.wisdom} onChange={handleWisdomChange} />
                            <input type="number" placeholder={updatedPlayerInfo.wis_bonus} value={updatedPlayerInfo.wis_bonus} onChange={handleWisBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.wis_save} value={updatedPlayerInfo.wis_save} onChange={handleWisSaveChange} />
                            <input type="number" placeholder={updatedPlayerInfo.charisma} value={updatedPlayerInfo.charisma} onChange={handleCharismaChange} />
                            <input type="number" placeholder={updatedPlayerInfo.cha_bonus} value={updatedPlayerInfo.cha_bonus} onChange={handleChaBonusChange} />
                            <input type="number" placeholder={updatedPlayerInfo.cha_save} value={updatedPlayerInfo.cha_save} onChange={handleChaSaveChange} />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    {players[0].quantity_items.map(item => {
                        return (
                            <ul>
                                <DetailViewItem key={item.id} item={item} />
                            </ul>
                        )
                    })}
                    <button onClick={() => history.push('/players')}>Player List</button>
                </div>
        </div>
    )
}