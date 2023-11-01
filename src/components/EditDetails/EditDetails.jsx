//Imports used for this components
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Button, CardHeader, Typography } from "@mui/material";
import DetailViewItem from "../DetailViewItem/DetailViewItem";

//Function for the edit details view
export default function EditDetails() {
    //Saves the id of the player
    const id = Number(useParams().id);
    //Instanciates dispatch and history for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Grabs the store for the players for use
    const players = useSelector((store) => store.details)
    //Console log for testing
    console.log(id)

    //useEffect that runs dispatch on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYER_DETAILS', payload: id });
    }, []);

    //State used to update player information, this needs to be refactored
    const [updatedPlayerInfo, setUpdatedPlayerInfo] = useState({ player_name: "", character_name: "", character_img: "", character_class: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: "" })

    //useEffect that sets stateto current player stats in the store to pre-populate the form
    useEffect(() => {
        setUpdatedPlayerInfo({ player_name: players[0].player_name, character_name: players[0].character_name, character_img: players[0].character_img, character_class: players[0].character_class, character_level: players[0].character_level, current_hp: players[0].current_hp, total_hp: players[0].total_hp, armor_class: players[0].armor_class, speed: players[0].speed, initiative_bonus: players[0].initiative_bonus, strength: players[0].strength, str_bonus: players[0].str_bonus, str_save: players[0].str_save, dexterity: players[0].dexterity, dex_bonus: players[0].dex_bonus, dex_save: players[0].dex_save, constitution: players[0].constitution, con_bonus: players[0].con_bonus, con_save: players[0].con_save, intelligence: players[0].intelligence, int_bonus: players[0].int_bonus, int_save: players[0].int_save, wisdom: players[0].wisdom, wis_bonus: players[0].wis_bonus, wis_save: players[0].wis_save, charisma: players[0].charisma, cha_bonus: players[0].cha_bonus, cha_save: players[0].cha_save })
    }, [players])
    //Variable used for dispatch
    let updatedStats = {id: id, ...updatedPlayerInfo} 
    //Way to many on change listeners, this needs to be refactored
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
    const handleCharacterClassChange = (event) => {
        console.log(event);
        setUpdatedPlayerInfo({...updatedPlayerInfo, character_class: event.target.value })
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
    //Function that runs on cilck fo the submit button. This takes the updated stats and sends it off to the database. Also fires off a pop up to alert the player that the update was successful
    const handleSubmit = (e) => {
        e.preventDefault(),
        Swal.fire(
            'Updated!',
            'Character has been updated.',
            'success'
        )
        dispatch ({
            type: 'UPDATE_CHARACTER', 
            payload: updatedStats
        })
        history.push(`/details/${id}`)
    }
         //Console logs for testing   
        console.log(updatedPlayerInfo)
        console.log(id)
        console.log(updatedPlayerInfo)
        //Elements used for the component, this takes the data and displayes it in a form that can be updated. It also loops over the inventory and creats a seperate component for each item
    return (
        <>
        <div style={{textAlign: "center"}}>
        <Typography variant="h4" style={{textDecoration: "underline"}}>Character Edit</Typography>
        </div>
        <Container style={{ border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)", display:"flex", flexDirection: "column", padding: "10px"}}>
            
            <Button variant="contained" style={{width: "124.078px", height: "36.5px", margin: "5px"}} onClick={() => history.push('/players')}>Player List</Button>
        <div>
            <div key={updatedPlayerInfo.id}>
                        <form onSubmit={handleSubmit}>
                    <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)",  padding: "5px"}}>
                    <img style={{width: "197px", height: "255px"}} src={updatedPlayerInfo.character_img} />
                        <CardHeader title="Update Player Info" style={{textDecoration: "underline"}}></CardHeader>
                       
                        <FormControl>
                            <InputLabel >Player Name</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Player Name" type="text" placeholder={updatedPlayerInfo.player_name} value={updatedPlayerInfo.player_name} onChange={handlePlayerNameChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Character Name</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Character Name" type="text" placeholder={updatedPlayerInfo.character_name} value={updatedPlayerInfo.character_name} onChange={handleCharacterNameChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Character Image Url</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Character Image Url" type="text" placeholder={updatedPlayerInfo.character_img} value={updatedPlayerInfo.character_img} onChange={handleCharacterImageChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Character Class</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Character Class" type="text" placeholder={updatedPlayerInfo.character_class} value={updatedPlayerInfo.character_class} onChange={handleCharacterClassChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Character Level</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Character Level" type="text" placeholder={updatedPlayerInfo.character_level} value={updatedPlayerInfo.character_level} onChange={handleCharacterLevelChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Current Hit Points</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Current Hit Points" type="number" placeholder={updatedPlayerInfo.current_hp} value={updatedPlayerInfo.current_hp} onChange={handleCurrentHpChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Total Hit Points</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Total Hit Points" type="number" placeholder={updatedPlayerInfo.total_hp} value={updatedPlayerInfo.total_hp} onChange={handleTotalHpChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Armor Class</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Armor class" type="number" placeholder={updatedPlayerInfo.armor_class} value={updatedPlayerInfo.armor_class} onChange={handleArmorClassChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Speed</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Speed" type="number" placeholder={updatedPlayerInfo.speed} value={updatedPlayerInfo.speed} onChange={handleSpeedChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Initiative Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Initiative Bonus" type="number" placeholder={updatedPlayerInfo.initiative_bonus} value={updatedPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChange} />
                            </FormControl>
                            </Card>
                            <Card style={{ margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)", padding: "5px"}}>
                            <CardHeader title="Update Player Stats" style={{textDecoration: "underline"}}></CardHeader>
                            <FormControl>
                                <InputLabel>Strength</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Strength" type="number" placeholder={updatedPlayerInfo.strength} value={updatedPlayerInfo.strength} onChange={handleStrengthChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Strength Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Strength Bonus" type="number" placeholder={updatedPlayerInfo.str_bonus} value={updatedPlayerInfo.str_bonus} onChange={handleStrBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Strength Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Strength Saving Throw" type="number" placeholder={updatedPlayerInfo.str_save} value={updatedPlayerInfo.str_save} onChange={handleStrSaveChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Dexterity</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Dexterity" type="number" placeholder={updatedPlayerInfo.dexterity} value={updatedPlayerInfo.dexterity} onChange={handleDexterityChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Dexterity Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Dexterity Bonus" type="number" placeholder={updatedPlayerInfo.dex_bonus} value={updatedPlayerInfo.dex_bonus} onChange={handleDexBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Dexterity Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Dexterity Saving Throw" type="number" placeholder={updatedPlayerInfo.dex_save} value={updatedPlayerInfo.dex_save} onChange={handleDexSaveChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Constitution</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Constitution" type="number" placeholder={updatedPlayerInfo.constitution} value={updatedPlayerInfo.constitution} onChange={handleConstitutionChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Constitution Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Constitution Bonus" type="number" placeholder={updatedPlayerInfo.con_bonus} value={updatedPlayerInfo.con_bonus} onChange={handleConBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Constitution Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Constitution Saving Throw" type="number" placeholder={updatedPlayerInfo.con_save} value={updatedPlayerInfo.con_save} onChange={handleConSaveChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Intelligence</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Intelligence" type="number" placeholder={updatedPlayerInfo.intelligence} value={updatedPlayerInfo.intelligence} onChange={handleIntelligenceChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Intelligence Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Intelligence Bonus" type="number" placeholder={updatedPlayerInfo.int_bonus} value={updatedPlayerInfo.int_bonus} onChange={handleIntBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Intelligence Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Intelligence Saving Throw" type="number" placeholder={updatedPlayerInfo.int_save} value={updatedPlayerInfo.int_save} onChange={handleIntSaveChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Wisdom</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Wisdom" type="number" placeholder={updatedPlayerInfo.wisdom} value={updatedPlayerInfo.wisdom} onChange={handleWisdomChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Wisdom Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Wisdom Bonus" type="number" placeholder={updatedPlayerInfo.wis_bonus} value={updatedPlayerInfo.wis_bonus} onChange={handleWisBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Wisdom Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Wisdom Saving Throw" type="number" placeholder={updatedPlayerInfo.wis_save} value={updatedPlayerInfo.wis_save} onChange={handleWisSaveChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Charisma</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Charisma" type="number" placeholder={updatedPlayerInfo.charisma} value={updatedPlayerInfo.charisma} onChange={handleCharismaChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Charisma Bonus</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Charisma Bonus" type="number" placeholder={updatedPlayerInfo.cha_bonus} value={updatedPlayerInfo.cha_bonus} onChange={handleChaBonusChange} />
                            </FormControl>
                            <FormControl>
                            <InputLabel>Charisma Saving Throw</InputLabel>
                            <OutlinedInput style={{margin: "5px"}} label="Charisma Saving Throw" type="number" placeholder={updatedPlayerInfo.cha_save} value={updatedPlayerInfo.cha_save} onChange={handleChaSaveChange} />
                            </FormControl>
                            <Button style={{marginTop: "25px", marginLeft: "317px"}} variant="contained" type="submit">Submit</Button>
                            </Card>
                        </form>
                    <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)", columnCount: "2", padding: "5px"}}>
                    {players[0].quantity_items.map(item => {
                        return (
                            <>
                                <DetailViewItem key={item.id} item={item} />
                                </>
                        )
                    })}
                    </Card>
                 
                </div>
        </div>
        </Container>
        </>
    )
}