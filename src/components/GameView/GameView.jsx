import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Card, Container, Typography } from "@mui/material";

export default function GameView() {
const dispatch = useDispatch();
const history = useHistory();
const players = useSelector((store) => store.players)
console.log(players)

    return(
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
            <div>
                <Typography variant="h4">Game View</Typography>
            </div>
            
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
    )
}