import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Table, TableBody, TableHead, TableRow, TableContainer, TableCell, Paper, Typography } from "@mui/material";

import PlayersTableItem from "../PlayerTableItems/PlayerTableItem";

export default function PlayersTable() {
    const dispatch = useDispatch();
    const players = useSelector((store) => store.players)
    console.log(players);

    useEffect(() => {
        dispatch({ type: "FETCH_PLAYERS" });
    }, [])

    return (
        <Paper style={{border: "1px solid black", margin: "10px"}}>
            <TableContainer style={{ maxWidth: "90%", margin: "auto", padding: "10px" }}>
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