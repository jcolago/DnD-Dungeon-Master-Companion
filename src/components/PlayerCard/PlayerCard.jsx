//Imports used for the component
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Button, OutlinedInput, Typography, Select, MenuItem, FormControl, InputLabel, CardMedia } from "@mui/material";
import ConditionItem from "../ConditionItem/ConditionItem";
//Function for the components, takes in the player info 
export default function PlayerCard({ player }) {
    //Instanciates dispatch for use in component
    const dispatch = useDispatch();
    //Saves the conditions state in a variable for use
    const conditions = useSelector((store) => store.conditions);
    //State used for updating information in component
    const [conditionLength, setConditionLength] = useState('')
    const [conditionId, setConditionId] = useState('')
    const [newHp, setNewHp] = useState('')
    //Console log for testing
    console.log(newHp);
    //useEffect that sets new hp state to the current hp of the character
    useEffect (() => {
        setNewHp(player.current_hp)
    },[player])
    //Function runs on click of add condition button, takes the new state and sends it to the database before refetching the player data
    const addCondition = () => {
        let conditionObj = { condition_length: Number(conditionLength), condition_id: Number(conditionId), player_id: Number(player.id)}
        console.log(conditionObj)
        dispatch({ type: 'ADD_CONDITION', payload: conditionObj})
        setConditionId('');
        setConditionLength('');
    }
    //Function that runs when update button is clicked, sends the new hp state to database to be updated then fetches the player data
    const handleUpdate = () =>{
        const newHpObj = { current_hp: Number(newHp), player_id: Number(player.id)}
        console.log(newHpObj)
        dispatch ({ type: "UPDATE_HIT_POINTS", payload: newHpObj})
    }
    //Elements used for the components, takes the passed in player data and breaks it apart for display on the DOM
    return (
        // <Container style={{border: "2px double black", backgroundColor: "rgb(128, 150, 191, .5)", display: "flex", flexDirection: "row" ,padding: "10px", margin: "10px"}}>
            
                <Card className="info-container" style={{ padding: "5px", margin: "5px", width: "25%", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardMedia style={{textAlign: "center"}} >
                <img style={{width: "197px", height: "255px"}} src={player.character_img}/>
                </CardMedia>
                {/* <Typography variant="h6" gutterBottom> Player Info</Typography> */}
                <Typography >Player Name: {player.player_name}</Typography> <Typography gutterBottom>Character Name: {player.character_name}</Typography>
                
                <Typography>Hit Points: <OutlinedInput  style={{ maxHeight: "25px", maxWidth: "50px"}} variant="outlined" onChange={(event) => setNewHp(event.target.value)} value={newHp} /> / {player.total_hp} <Button style={{ maxHeight: "25px", marginLeft: "5px"}} onClick={handleUpdate} variant="contained">Update</Button></Typography>
                <Typography>Armor Class: {player.armor_class}</Typography>
                <Typography>Initiative bonus: {player.initiative_bonus} </Typography>
                <hr />
            {/* </Card>
            <Card className="condition-container" style={{padding: "5px", margin: "5px", width: "65%", height: "80%", backgroundColor: "rgb(226, 232, 243, .7)"}}> */}
                {/* <Typography variant="h6" gutterBottom>Conditions</Typography> */}
                {player.length_condition && player.length_condition.map (player => {
                    return(
                        <div>
                <ConditionItem player={player} key={player.id}/>
                </div>
                )
            })}
            <div style={{marginTop: "5px"}}>
            <FormControl>
            <InputLabel size="small" htmlFor="condition-length">Length</InputLabel>
                <OutlinedInput style={{width: "95px"}} size="small" label="Length" id="condition-length" placeholder=" Length"  onChange={(event) => setConditionLength(event.target.value)} type="number" value={conditionLength}/>
                </FormControl>
                <FormControl>
                <InputLabel id="Conditon" size="small" > Condition </InputLabel>
                <Select label="Condition" size="small" onChange={(event) => setConditionId(event.target.value)} value={conditionId} name="conditions" id="conditions" key={conditions.id} style={{width: "200px", marginLeft: "5px"}}>
                    <MenuItem disabled value="" > 
                    <em>Please select a condition</em>
                    </MenuItem>
                    {conditions.map(condition =>{
                        return(
                            condition.condition_name != "None" && (
                            
                        <MenuItem value={condition.id} key={condition.id}><Typography>{condition.condition_name}</Typography></MenuItem>
                        
                            )
                        )
                    })}
                </Select>
                </FormControl>
                <Button style={{ maxHeight: "25px", marginBottom: "3px", marginTop: "2px"}} variant="contained" onClick={addCondition}>Add Condition</Button> 
                </div> 
                <br/>
            <div style={{textAlign: "left"}}>
            <Button variant="contained" style={{marginTop: "5px"}} onClick={() => dispatch({ type: 'REMOVE_PLAYER', payload: player.id})}>Remove</Button>
            </div>
            </Card>
        // </Container>
        
         
         
    )
}