import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { TableRow, TableCell, Button, Typography } from "@mui/material";

export default function MonsterTableItem({ monster }) {
    const dispatch = useDispatch();
    const history = useHistory();

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

    return (
        <>
            <TableRow style={{border: "2px solid black"}}>
                <TableCell style={{borderRight: "2px solid black"}}> <Typography>{monster.name}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.size}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.hit_points}</Typography></TableCell>
                <TableCell style={{borderRight: "2px solid black"}}><Typography>{monster.game_name}</Typography></TableCell>
                <TableCell style={{textAlign: "center"}}><Button variant="contained" onClick={() => history.push(`/monsterdetails/${monster.id}`)}>Details</Button> <Button variant="contained" style={{backgroundColor: "red", color: "white"}} onClick={deleteMonster}>Delete</Button> </TableCell>
            </TableRow>
        </>
    )
}