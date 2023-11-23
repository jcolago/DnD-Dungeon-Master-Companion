//Imports used for this component
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Button, CardHeader } from "@mui/material";

//Function for the component
export default function PlayerStatInfo() {
    //Instanciate dispatch and history for use
    const dispatch = useDispatch();
    const history = useHistory();
    //State used for the form entries
    const [strength, setStrength] = useState("");
    const [strengthBonus, setStrengthBonus] = useState("");
    const [strengthSave, setStrengthSave] = useState("");
    const [dexterity, setDexterity] = useState("");
    const [dextertiyBonus, setDexterityBonus] = useState("");
    const [dexteritySave, setDexteritySave] = useState("");
    const [constitution, setConstitution] = useState("");
    const [constitutionBonus, setConstitutionBonus] = useState("");
    const [constitutionSave, setConstitutionSave] = useState("");
    const [intelligence, setIntelligence] = useState("");
    const [intelligenceBonus, setIntelligenceBonus] = useState("");
    const [intelligenceSave, setIntelligenceSave] = useState("");
    const [wisdom, setWisdom] = useState("");
    const [wisdomBonus, setWisdomBonus] = useState("");
    const [wisdomSave, setWisdomSave] = useState("");
    const [charisma, setCharisma] = useState("");
    const [charismaBonus, setCharismaBonus] = useState("");
    const [charismaSave, setCharismaSave] = useState("");

     //Runs on click of submit button.  Packages up state variables into an object and sends the new object to the reducer to be sent ot the back end on completion of the form
    const addNewStatsInfo = (event) => {
        event.preventDefault();
        const newPlayerStats = {strength: strength, str_bonus: strengthBonus, str_save: strengthSave, dexterity: dexterity, dex_bonus: dextertiyBonus, dex_save: dexteritySave, constitution: constitution, con_bonus: constitutionBonus, con_save: constitutionSave, intelligence: intelligence, int_bonus: intelligenceBonus, int_save: intelligenceSave, wisdom: wisdom, wis_bonus: wisdomBonus, wis_save: wisdomSave, charisma: charisma, cha_bonus: charismaBonus, cha_save: charismaSave};
        console.log(newPlayerStats);
        dispatch({ type: 'SET_STATS', payload: newPlayerStats })
        setStrength("");
        setStrengthBonus("");
        setStrengthSave("");
        setDexterity("");
        setDexterityBonus("");
        setDexteritySave("");
        setConstitution("");
        setConstitutionBonus("");
        setConstitutionSave("");
        setIntelligence("");
        setIntelligenceBonus("");
        setIntelligenceSave("");
        setWisdom("");
        setWisdomBonus("");
        setWisdomSave("");
        setCharisma("");
        setCharismaBonus("");
        setCharismaSave("");
        history.push('/playerinventory')
    }
    //Elements rendered in component
    return (
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
            <Card style={{marginTop: "20px", marginBottom: "20px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                
                <CardHeader style={{textDecoration: "underline"}} title="Enter Character Stats Below" />
                <FormControl>
                    <form onSubmit={addNewStatsInfo}>
                        <FormControl>
                            <InputLabel style={{margin: "5px"}} htmlFor="strength" >Strength</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}  label="Strength" id="strength" type="number" placeholder="Strength" value={strength} onChange={(e) => setStrength(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="str-bonus">Strength Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Strength Bonus" id="str-bonus" type="number" placeholder="Strength Bonus" value={strengthBonus} onChange={(e) => setStrengthBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="str-save">Strength Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Strength Saving Throw" id="str-save"  type="number" placeholder="Strength Save" value={strengthSave} onChange={(e) => setStrengthBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dexterity">Dexterity</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterity" id="dexterity"  type="number" placeholder="Dexterity" value={dexterity} onChange={(e) => setDexterity(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dex-bonus">Dexterity Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterty Bonus" id="dex-bonus"  type="number" placeholder="Dexterity Bonus" value={dextertiyBonus} onChange={(e) => setDexterityBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="dex-save">Dexterity Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Dexterity Saving Throw" id="dex-save"  type="number" placeholder="Dexterity Save" value={dexteritySave} onChange={(e) => setDexteritySave(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="constitution">Constitution</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}
                            label="Constitution" id="constitution"  type="number" placeholder="Constitution" value={constitution} onChange={setConstitution(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="con-bonus">Constitution Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Constitution Bonus" id="con-bonus"  type="number" placeholder="Constitution Bonus" value={constitutionBonus} onChange={(e) => setConstitutionBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="con-save">Constitution Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Constitution Saving Throw" id="con-save"  type="number" placeholder="Constitution Save" value={constitutionSave} onChange={(e) => setCharismaSave(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="intelligence">Intelligence</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} 
                            label="Intelligence" id="intelligence"  type="number" placeholder="Intelligence" value={intelligence} onChange={(e) => setIntelligence(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="int-bonus">Intelligence Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}}  label="Intelligence Bonus" id="int-bonus"  type="number" placeholder="Intelligence Bonus" value={intelligenceBonus} onChange={(e) => setIntelligenceBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="int-save">Intelligence Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Intelligence Saving Throw" id="ing-save"  type="number" placeholder="Intelligence Save" value={intelligenceSave} onChange={(e) => setIntelligenceSave(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wisdom">Wisdom</InputLabel>
                            <OutlinedInput style={{margin: "5px", width: "225px"}} label="Wisdom" id="wisdom"  type="number" placeholder="Wisdom" value={wisdom} onChange={(e) => setWisdom(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wis-bonus">Wisdom Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Wisdom Bonus" id="wis-bonus"  type="number" placeholder="Wisdom Bonus" value={wisdomBonus} onChange={(e) => setWisdomBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="wis-save">Wisdom Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Wisdom Saving Throw" id="wis-save"  type="number" placeholder="Wisdom Save" value={wisdomSave} onChange={(e) => setWisdomSave(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="charisma">Charisma</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charisma" id="charisma"  type="number" placeholder="Charisma" value={charisma} onChange={(e) => setCharisma(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="cha-bonus">Charisma Bonus</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charisma Bonus" id="cha-bonus"  type="number" placeholder="Charisma Bonus" value={charismaBonus} onChange={(e) => setCharismaBonus(e.target.value)} />
                        </FormControl>
                        <FormControl>
                        <InputLabel style={{margin: "5px"}}htmlFor="cha-save">Charisma Saving Throw</InputLabel>
                            <OutlinedInput required style={{margin: "5px", width: "225px"}} label="Charaisma Saving Throw" id="cha-save"  type="number" placeholder="Charisma Save" value={charismaSave} onChange={(e) => setCharismaSave(e.target.value)} />
                        </FormControl>
                        <Button style={{marginTop: "23px", marginLeft: "380px"}} variant="contained" type="submit">Submit</Button>
                    </form>
                </FormControl>
            </Card>
        </Container>
    )
}