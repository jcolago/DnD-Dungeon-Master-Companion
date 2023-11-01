//Imports used for this component
import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Container, Typography } from "@mui/material";
//Function for the game view component
export default function GameView() {
    //Grabs the store for the players data for use in the component
const players = useSelector((store) => store.players)
//Console log for testing
console.log(players)
//Elements used for this component, this takes the player data and loops over it. The component then conditionally renders the data based on if the displayed key is true or false
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