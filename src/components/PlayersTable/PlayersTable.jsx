//Imports used for the component
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Table, TableBody, TableHead, TableRow, TableContainer, TableCell, Paper, Typography } from "@mui/material";
//Imports the player table item component for use
import PlayersTableItem from "../PlayerTableItems/PlayerTableItem";
//Function for the component
export default function PlayersTable() {
    //Instanciates dispatch for use
    const dispatch = useDispatch();
    //Selector for the players list to be used in the component
    const players = useSelector((store) => store.players)
    //Console log for testing
    console.log(players);
    //Use Effect to dispatch to get the players list from the database
    useEffect(() => {
        dispatch({ type: "FETCH_PLAYERS" });
    }, [])


    //Elements used for the component. This displays the players in a table and loops over the players list to add them to the players table item
    return (
        <Paper style={{border: "2px double black", padding: "10px", margin: "auto", backgroundColor: "rgb(128, 150, 191, .5)", width:"90%" }}>
            <TableContainer style={{ maxWidth: "90%", margin: "auto", marginTop: "15px", marginBottom: "15px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)" }}>
                <Table style={{ border: "2px solid black" }}>
                    <TableHead style={{ border: "2px solid black" }}>
                        <TableRow style={{ border: "2px solid black" }}>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}> <Typography style={{ fontWeight: "bold" }}>Player Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Character Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Character Level</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Character Class</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Game Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}> <Typography style={{ fontWeight: "bold" }}>Actions</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {players.map(player => {
                            return (
                                <PlayersTableItem key={player.id} player={player} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}