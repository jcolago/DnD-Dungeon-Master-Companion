//Imports used for component
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { TableRow, TableCell, Button, Typography } from "@mui/material";
//Function used for component
export default function MonsterTableItem({ monster }) {
    //Instanciates dispatch and history for use in component and on button clicks
    const dispatch = useDispatch();
    const history = useHistory();
    //Function runs on click fo the delete button. Fires a sweetalert for the user to confirm that they want to delete the monster and sends the dispatch on sweetalert confirmation
    const deleteMonster = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This monster will be deleted.",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    'Deleted!',
                    'The monster has been removed',
                    'success'
                )
                dispatch ({
                    type: "DELETE_MONSTER", 
                    payload: monster.id
                })
            }
        })

    }
    //Elements used for the monster table item, takes the monster prop and breaks out the data for display
    return (
        <>
            <TableRow style={{border: "2px solid black"}}>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{monster.name}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.size}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.hit_points}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.game_name}</Typography></TableCell>
                <TableCell style={{textAlign: "center"}}><Button style={{width: "55px", height: "25px"}} variant="contained" onClick={() => history.push(`/monsterdetails/${monster.id}`)}>Details</Button> <Button variant="contained" style={{backgroundColor: "red", color: "white", width: "55px", height: "25px"}} onClick={deleteMonster}>Delete</Button> {monster.displayed === false ? <Button style={{width: "55px", height: "25px"}} variant="contained" onClick={() => dispatch({ type: 'DISPLAY_MONSTER', payload: monster.id})}>Display</Button> : <Button style={{ height: "25px"}} variant="contained" onClick={() => history.push("/gameview")}>Game View</Button>} </TableCell>
            </TableRow>
        </>
    )
}