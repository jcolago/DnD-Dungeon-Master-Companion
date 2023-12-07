//Imports used for this component
import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Container, Typography, Paper } from "@mui/material";
//Function for the game view component
export default function GameView() {
    //Grabs the store for the players data for use in the component
const players = useSelector((store) => store.players);
const monsters = useSelector((store) => store.monsters)
//Console log for testing
console.log(monsters)
//Elements used for this component, this takes the player data and loops over it. The component then conditionally renders the data based on if the displayed key is true or false
    return(
        <div >
           
            <Typography style={{textAlign: "center", textDecoration: "underline", margin: "10px"}} variant="h4">Game View</Typography>
            
        <Paper style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)", padding: "20px", display: "flex", flexWrap: "wrap", flexDirection: "row", margin: "auto"}}>
            {players.map(player => {
                return( 
                    player.displayed === true && (
                  <PlayerCard key={player.id} player={player} />
                )
                )
             })}
            
        </Paper>
   </div>
    )
}