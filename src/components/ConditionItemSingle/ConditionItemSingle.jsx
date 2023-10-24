import { Typography, OutlinedInput, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export default function ConditionItemSingle({ condition }) {

    const dispatch = useDispatch();
    const [newlength, setNewLength] = useState('');

    useEffect(() => {
        setNewLength(condition.length)
    }, [condition])

    console.log(newlength)
    return(
        <div>
       <Typography> <Typography>Condition: {condition.condition_name} </Typography> <Typography>Duration: <OutlinedInput  style={{ maxHeight: "25px", maxWidth: "40px"}} onChange={(event) => setNewLength(event.target.value)} value={newlength} /> 
        <Button variant="contained" style={{ maxHeight: "25px", marginLeft: "5px", marginBottom: "3px"}} onClick={() => dispatch({ type: 'UPDATE_CONDITION', payload: {id: condition.id, length: newlength}})}>Update</Button>
        <Button variant="contained" style={{ maxHeight: "25px", marginLeft: "5px", marginBottom: "3px"}} onClick={() => dispatch({ type: 'DELETE_CONDITION', payload: Number(condition.id)})}>Delete</Button>
        </Typography> 
        </Typography>
        </div>
    )
}