//Imports used for the component
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MonsterTableItem from "../MonsterTableItem/MonsterTableItem";
import { Table, TableBody, TableHead, TableRow, TableContainer, TableCell, Paper, Typography } from "@mui/material";

//Function for the component
export default function MonstersTable() {
    //Instanciates dispatch for use on button click and useEffect
    const dispatch = useDispatch();
    //Saves monsters state in a variable for use
    const monsters = useSelector((store) => store.monsters)
    //Console log for texting
    console.log(monsters);
    //useEffect to set the state of the monsters store
    useEffect(() => {
        dispatch({ type: "FETCH_MONSTERS" });
    }, [])
    //Elements used for the component, also maps over the monsters variable and creates a table row for each monster
    return (
        <Paper style={{ border: "2px double black", padding: "10px", margin: "auto", backgroundColor: "rgb(128, 150, 191, .5)", width: "90%"}}>
            <TableContainer style={{ maxWidth: "90%", margin: "auto", marginTop: "15px", marginBottom: "15px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <Table style={{ border: "2px solid black" }}>
                    <TableHead style={{ border: "2px solid black" }}>
                        <TableRow style={{ border: "2px solid black" }}>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Monster Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Size</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Hit Points</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Game Name</Typography></TableCell>
                            <TableCell style={{ border: "2px solid black", textAlign: "center" }}><Typography style={{ fontWeight: "bold" }}>Actions</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {monsters.map(monster => {
                            return (
                                <MonsterTableItem key={monster.id} monster={monster} />
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
