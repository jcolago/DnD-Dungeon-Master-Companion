import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import Footer from "../Footer/Footer";
import { Card, Container, Typography } from "@mui/material";

export default function GameView() {
const dispatch = useDispatch();
const history = useHistory();
const players = useSelector((store) => store.players)
console.log(players)

    return(
        <div>
            <Typography style={{textAlign: "center", textDecoration: "underline", margin: "10px"}} variant="h4">Game View</Typography>
        <Container style={{border: "2px double black", width: "90%", backgroundColor: "rgb(128, 150, 191, .5)", paddingRight: "50px"}}>
            {players.map(player => {
                return( 
                    player.displayed === true && (
                        // <Card className="player-card" style={{ margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                  <PlayerCard key={player.id} player={player} />
                //   </Card>
                )
                
                )
             })}
            
        </Container>
   </div>
    )
}