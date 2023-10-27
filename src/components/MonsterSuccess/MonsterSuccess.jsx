import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, Typography } from "@mui/material";

export default function MonsterSuccess() {
        const history = useHistory();
        return(
            <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
            <Card style={{margin: "15px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <Typography variant="h3" style={{textAlign: "center"}}>Monster Successfully Entered!</Typography>
                <div style={{textAlign: "center", margin: "5px"}}>
                <Button variant="contained" onClick={() => history.push("/monsterentry")}>Enter New Monster</Button>  <Button variant="contained" style={{margin: "5px", width: "196.695px"}}  onClick={() => history.push("/monsters")}>Monster List</Button>
                </div>
            </Card>
            </Container>
        )
    }
