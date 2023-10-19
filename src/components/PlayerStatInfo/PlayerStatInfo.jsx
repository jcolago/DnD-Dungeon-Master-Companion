import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerStatInfo() {
    const dispatch = useDispatch();
    const history = useHistory();

    let [newPlayerStats, setNewPlayerStats] = useState({ strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: "" })

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
    const addNewStatsInfo = (event) => {
        event.preventDefault();
        console.log(newPlayerStats)
        dispatch({ type: 'SET_STATS', payload: newPlayerStats })
        setNewPlayerStats({ strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: "" });
        history.push('/playerinventory')
    }

    return (
        <div>
            <div>
                <h2>Enter Character Stats Below!</h2>
            </div>
            <br />
            <form onSubmit={addNewStatsInfo}>
                <input type="number" placeholder="Strength" value={newPlayerStats.strength} onChange={handleStrengthChange} />
                <input type="number" placeholder="Strength Bonus" value={newPlayerStats.str_bonus} onChange={handleStrBonusChange} />
                <input type="number" placeholder="Strength Save" value={newPlayerStats.str_save} onChange={handleStrSaveChange} />
                <input type="number" placeholder="Dexterity" value={newPlayerStats.dexterity} onChange={handleDexterityChange} />
                <input type="number" placeholder="Dexterity Bonus" value={newPlayerStats.dex_bonus} onChange={handleDexBonusChange} />
                <input type="number" placeholder="Dexterity Save" value={newPlayerStats.dex_save} onChange={handleDexSaveChange} />
                <input type="number" placeholder="Constitution" value={newPlayerStats.constitution} onChange={handleConstitutionChange} />
                <input type="number" placeholder="Constitution Bonus" value={newPlayerStats.con_bonus} onChange={handleConBonusChange} />
                <input type="number" placeholder="Constitution Save" value={newPlayerStats.con_save} onChange={handleConSaveChange} />
                <input type="number" placeholder="Intelligence" value={newPlayerStats.intelligence} onChange={handleIntelligenceChange} />
                <input type="number" placeholder="Intelligence Bonus" value={newPlayerStats.int_bonus} onChange={handleIntBonusChange} />
                <input type="number" placeholder="Intelligence Save" value={newPlayerStats.int_save} onChange={handleIntSaveChange} />
                <input type="number" placeholder="Wisdom" value={newPlayerStats.wisdom} onChange={handleWisdomChange} />
                <input type="number" placeholder="Wisdom Bonus" value={newPlayerStats.wis_bonus} onChange={handleWisBonusChange} />
                <input type="number" placeholder="Wisdom Save" value={newPlayerStats.wis_save} onChange={handleWisSaveChange} />
                <input type="number" placeholder="Charisma" value={newPlayerStats.charisma} onChange={handleCharismaChange} />
                <input type="number" placeholder="Charisma Bonus" value={newPlayerStats.cha_bonus} onChange={handleChaBonusChange} />
                <input type="number" placeholder="Charisma Save" value={newPlayerStats.cha_save} onChange={handleChaSaveChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}