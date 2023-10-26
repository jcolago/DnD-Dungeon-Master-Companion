import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, Typography } from "@mui/material";

export default function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const newCharacterClick = () => {
        history.push("/playerinfo");
        dispatch ({ type: 'CLEAR_INFO'});
        dispatch ({ type: 'CLEAR_STATS'});
        dispatch ({ type: 'CLEAR_ITEMS'});
    }

    const playerListClick = () => {
        history.push("/players");
        dispatch ({ type: 'CLEAR_INFO'});
        dispatch ({ type: 'CLEAR_STATS'});
        dispatch ({ type: 'CLEAR_ITEMS'});
    }

    return(
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
        <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
            <Typography style={{textAlign: "center"}} variant="h3">Character Successfully Entered!</Typography>
            <div style={{textAlign: "center", margin: "5px"}}>
            <Button variant="contained" style={{margin: "5px"}} onClick={newCharacterClick}>Enter New Character</Button>
            <Button variant="contained"  style={{margin: "5px", width: "214.609px"}} onClick={playerListClick}>Players List</Button>
            </div>
        </Card>
        </Container>
    )
}