//Imports used for this component
import { Typography, OutlinedInput, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

//Function renders the component in the app
export default function ConditionItemSingle({ condition }) {
    //Instanciates dispatch for use in component
    const dispatch = useDispatch();
    //State used for setting the new length of a condition
    const [newlength, setNewLength] = useState('');
    //useEffect that sets state to the current condition length before update
    useEffect(() => {
        setNewLength(condition.length)
    }, [condition])
    //Saves off the condition id for entry that is being updated
    let conditionId = condition.id;

        //Function that runs on click of delete button. This brings up a sweetalert asking the user to confirm the deletion before deleting the condition
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
    //Elements used by the component. The return renders the component view.
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