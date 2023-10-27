import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Button, CardHeader } from "@mui/material";


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
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
            <Card style={{marginTop: "20px", marginBottom: "20px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                
                <CardHeader style={{textDecoration: "underline"}} title="Enter Character Stats Below" />
                <FormControl>
                    <form onSubmit={addNewStatsInfo}>
                        <FormControl>
                            <InputLabel style={{margin: "5px"}} htmlFor="strength" >Strength</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}  label="Strength" id="strength" type="number" placeholder="Strength" value={newPlayerStats.strength} onChange={handleStrengthChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="str-bonus">Strength Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Strength Bonus" id="str-bonus" type="number" placeholder="Strength Bonus" value={newPlayerStats.str_bonus} onChange={handleStrBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="str-save">Strength Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Strength Saving Throw" id="str-save"  type="number" placeholder="Strength Save" value={newPlayerStats.str_save} onChange={handleStrSaveChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dexterity">Dexterity</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterity" id="dexterity"  type="number" placeholder="Dexterity" value={newPlayerStats.dexterity} onChange={handleDexterityChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dex-bonus">Dexterity Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterty Bonus" id="dex-bonus"  type="number" placeholder="Dexterity Bonus" value={newPlayerStats.dex_bonus} onChange={handleDexBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dex-save">Dexterity Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterity Saving Throw" id="dex-save"  type="number" placeholder="Dexterity Save" value={newPlayerStats.dex_save} onChange={handleDexSaveChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="constitution">Constitution</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}
                            label="Constitution" id="constitution"  type="number" placeholder="Constitution" value={newPlayerStats.constitution} onChange={handleConstitutionChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="con-bonus">Constitution Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Constitution Bonus" id="con-bonus"  type="number" placeholder="Constitution Bonus" value={newPlayerStats.con_bonus} onChange={handleConBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="con-save">Constitution Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Constitution Saving Throw" id="con-save"  type="number" placeholder="Constitution Save" value={newPlayerStats.con_save} onChange={handleConSaveChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="intelligence">Intelligence</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} 
                            label="Intelligence" id="intelligence"  type="number" placeholder="Intelligence" value={newPlayerStats.intelligence} onChange={handleIntelligenceChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="int-bonus">Intelligence Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}  label="Intelligence Bonus" id="int-bonus"  type="number" placeholder="Intelligence Bonus" value={newPlayerStats.int_bonus} onChange={handleIntBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="int-save">Intelligence Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Intelligence Saving Throw" id="ing-save"  type="number" placeholder="Intelligence Save" value={newPlayerStats.int_save} onChange={handleIntSaveChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wisdom">Wisdom</InputLabel>
                            <OutlinedInput style={{margin: "5px", width: "225px"}} label="Wisdom" id="wisdom"  type="number" placeholder="Wisdom" value={newPlayerStats.wisdom} onChange={handleWisdomChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wis-bonus">Wisdom Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Wisdom Bonus" id="wis-bonus"  type="number" placeholder="Wisdom Bonus" value={newPlayerStats.wis_bonus} onChange={handleWisBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wis-save">Wisdom Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Wisdom Saving Throw" id="wis-save"  type="number" placeholder="Wisdom Save" value={newPlayerStats.wis_save} onChange={handleWisSaveChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="charisma">Charisma</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charisma" id="charisma"  type="number" placeholder="Charisma" value={newPlayerStats.charisma} onChange={handleCharismaChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="cha-bonus">Charisma Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charisma Bonus" id="cha-bonus"  type="number" placeholder="Charisma Bonus" value={newPlayerStats.cha_bonus} onChange={handleChaBonusChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="cha-save">Charisma Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charaisma Saving Throw" id="cha-save"  type="number" placeholder="Charisma Save" value={newPlayerStats.cha_save} onChange={handleChaSaveChange} />
                        </FormControl>
                        <Button style={{marginTop: "23px", marginLeft: "380px"}} variant="contained" type="submit">Submit</Button>
                    </form>
                </FormControl>
            </Card>
        </Container>
    )
}