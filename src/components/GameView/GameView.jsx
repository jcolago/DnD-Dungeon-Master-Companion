import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Card, Container } from "@mui/material";

export default function GameView() {
const dispatch = useDispatch();
const history = useHistory();
const players = useSelector((store) => store.players)
console.log(players)

    return(
        <Container>
            <div>
                <h2>Game View</h2>
            </div>
            
            {players.map(player => {
                return( 
                    player.displayed === true && (
                        <Card className="player-card" style={{ margin: "5px"}}>
                  <PlayerCard key={player.id} player={player} />
                  </Card>
                )
                
                )
             })}
            
        </Container>
    )
}