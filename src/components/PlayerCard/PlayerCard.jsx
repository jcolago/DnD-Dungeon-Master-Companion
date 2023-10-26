import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, OutlinedInput, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import ConditionItem from "../ConditionItem/ConditionItem";

export default function PlayerCard({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const conditions = useSelector((store) => store.conditions);
    const [conditionLength, setConditionLength] = useState('')
    const [conditionId, setConditionId] = useState('')
    const [newHp, setNewHp] = useState('')

    console.log(newHp);

    useEffect (() => {
        setNewHp(player.current_hp)
    },[player])

    const addCondition = () => {
        let conditionObj = { condition_length: Number(conditionLength), condition_id: Number(conditionId), player_id: Number(player.id)}
        console.log(conditionObj)
        dispatch({ type: 'ADD_CONDITION', payload: conditionObj})
        setConditionId('');
        setConditionLength('');
    }

    const handleUpdate = () =>{
        const newHpObj = { current_hp: Number(newHp), player_id: Number(player.id)}
        console.log(newHpObj)
        dispatch ({ type: "UPDATE_HIT_POINTS", payload: newHpObj})
    }

    return (
        <Container style={{border: "2px double black", backgroundColor: "rgb(128, 150, 191, .5)", display: "flex", flexDirection: "row", padding: "10px", margin: "10px"}}>
            
                <Card className="info-container" style={{ padding: "5px", margin: "5px", width: "30%", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <img style={{width: "197px", height: "255px"}} src={player.character_img}/>
                <Typography variant="h4" gutterBottom> Player Info</Typography>
                <Typography >Player Name: {player.player_name}</Typography> <Typography gutterBottom>Character Name: {player.character_name}</Typography>
                
                <Typography>Hit Points: <OutlinedInput  style={{ maxHeight: "25px", maxWidth: "50px"}} variant="outlined" onChange={(event) => setNewHp(event.target.value)} value={newHp} /> / {player.total_hp} <Button style={{ maxHeight: "25px", marginLeft: "5px"}} onClick={handleUpdate} variant="contained">Update</Button></Typography>
                <Typography>Armor Class: {player.armor_class}</Typography>
                <Typography>Initiative bonus: {player.initiative_bonus} </Typography>
            </Card>
            <Card className="condition-container" style={{padding: "5px", margin: "5px", width: "65%", height: "80%", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <Typography variant="h4" gutterBottom>Conditions</Typography>
                {player.length_condition && player.length_condition.map (player => {
                    return(
                        <div>
                <ConditionItem player={player} key={player.id}/>
                </div>
                )
            })}
            <div style={{marginTop: "5px"}}>
            <FormControl>
            <InputLabel size="small" htmlFor="condition-length">Condition Length</InputLabel>
                <OutlinedInput size="small" label="Condition Length" id="condition-length" placeholder="Condition Length"  onChange={(event) => setConditionLength(event.target.value)} type="number" value={conditionLength}/>
                </FormControl>
                <FormControl>
                <InputLabel id="Conditon" size="small" > Condition </InputLabel>
                <Select label="Condition" size="small" onChange={(event) => setConditionId(event.target.value)} value={conditionId} name="conditions" id="conditions" key={conditions.id} style={{width: "200px", marginLeft: "5px"}}>
                    <MenuItem disabled value="" > 
                    <em>Please select a condition</em>
                    </MenuItem>
                    {conditions.map(condition =>{
                        return(<MenuItem value={condition.id} key={condition.id}><Typography>{condition.condition_name}</Typography></MenuItem>)
                    })}
                </Select>
                </FormControl>
                <Button style={{ maxHeight: "40px", marginLeft: "5px", marginBottom: "3px"}} variant="contained" onClick={addCondition}>Add Condition</Button> 
                </div> 
            </Card>
            <Button variant="contained" style={{margin: "5px", alignSelf:"end"}} onClick={() => dispatch({ type: 'REMOVE_PLAYER', payload: player.id})}>Remove</Button>
        </Container>
        
         
         
    )
}