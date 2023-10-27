import { Typography, OutlinedInput, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";


export default function ConditionItemSingle({ condition }) {

    const dispatch = useDispatch();
    const [newlength, setNewLength] = useState('');

    useEffect(() => {
        setNewLength(condition.length)
    }, [condition])

    let conditionId = condition.id;

    const deleteCondition = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This condition will be removed from the character",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    'Deleted!',
                    'The condition has been removed',
                    'success'
                )
                dispatch ({
                    type: 'DELETE_CONDITION',
                     payload: Number(conditionId)
                })
            }
        })

    }

    console.log(newlength)
    return(
        <div>
       <Typography> <Typography>Condition: {condition.condition_name} </Typography> <Typography>Duration: <OutlinedInput  style={{ maxHeight: "25px", maxWidth: "40px"}} onChange={(event) => setNewLength(event.target.value)} value={newlength} /> 
        <Button variant="contained" style={{ maxHeight: "25px", marginLeft: "5px", marginBottom: "3px"}} onClick={() => dispatch({ type: 'UPDATE_CONDITION', payload: {id: condition.id, length: newlength}})}>Update</Button>
        <Button variant="contained" style={{ backgroundColor: "red", color: "white", maxHeight: "25px", marginLeft: "5px", marginBottom: "3px"}}  onClick={deleteCondition}>Delete</Button>
        </Typography> 
        </Typography>
        </div>
    )
}