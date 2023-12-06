//Imports for the component
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { TableRow, TableCell, Button, Typography } from "@mui/material";
//Function for the component
export default function PlayersTableItem({ player }) {
    //Instanciates dispatch and history for use in the component
    const dispatch = useDispatch();
    const history = useHistory();
    //Function that runs on click of delete button. Asks the user to confirm they want to delete the character
    const deleteCharacter = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This character will be deleted.",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    'Deleted!',
                    'The character has been removed',
                    'success'
                )
                dispatch ({
                    type: "DELETE_CHARACTER", 
                    payload: player.id
                })
            }
        })

    }
    //Elements used for this component. Takes the passed in player data and breaks it apart to display on DOM
    return (
        <>
            <TableRow style={{border: "2px solid black"}}>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.player_name}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_name}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_level}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_class}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.game_name}</Typography> </TableCell>
                <TableCell style={{textAlign: "center"}}><Button style={{width: "55px", height: "25px"}} variant="contained" onClick={() => history.push(`/details/${player.id}`)}>Details</Button> <Button style={{backgroundColor: "red", color: "white", width: "55px", height: "25px"}} variant="contained" onClick={deleteCharacter}>Delete</Button> {player.displayed === false ? <Button style={{width: "55px", height: "25px"}} variant="contained" onClick={() => dispatch({ type: 'DISPLAY_PLAYER', payload: player.id})}>Display</Button> : <Button style={{ height: "25px"}} variant="contained" onClick={() => history.push("/gameview")}>Game View</Button>}</TableCell>
            </TableRow>
        </>
    )
}