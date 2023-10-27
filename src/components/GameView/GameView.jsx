import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Container, Typography } from "@mui/material";

export default function GameView() {
const players = useSelector((store) => store.players)
console.log(players)

    return(
        <div>
            <Typography style={{textAlign: "center", textDecoration: "underline", margin: "10px"}} variant="h4">Game View</Typography>
        <Container style={{border: "2px double black", width: "90%", backgroundColor: "rgb(128, 150, 191, .5)", paddingRight: "50px", paddingTop: "20px", paddingBottom: "20px"}}>
            {players.map(player => {
                return( 
                    player.displayed === true && (
                  <PlayerCard key={player.id} player={player} />
                )
                )
             })}
            
        </Container>
   </div>
    )
}