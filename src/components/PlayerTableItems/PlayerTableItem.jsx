import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { TableRow, TableCell, Button, Typography } from "@mui/material";

export default function PlayersTableItem({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

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

    return (
        <>
            <TableRow style={{border: "2px solid black"}}>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.player_name}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_name}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_level}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.character_class}</Typography> </TableCell>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{player.game_name}</Typography> </TableCell>
                <TableCell style={{textAlign: "center"}}><Button variant="contained" onClick={() => history.push(`/details/${player.id}`)}>Details</Button> <Button variant="contained" onClick={deleteCharacter}>Delete</Button> <Button variant="contained" onClick={() => dispatch({ type: 'DISPLAY_PLAYER', payload: player.id})}>Display</Button></TableCell>
            </TableRow>
        </>
    )
}