//Imports for component
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, CardHeader, Typography } from "@mui/material";

//function for component
export default function Review() {
    //Instanciates dispatch and history for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Saves the store in a variable for use in the component, this is the data from the player entry form
    const playersInfo = useSelector((store) => store.playersInfo);
    const playerStats = useSelector((store) => store.stats);
    const item = useSelector((store) => store.backpack);
    const inventory = useSelector((store) => store.inventory)
    //Object send to backend to be added to the database
    const characterObj = {...playersInfo, ...playerStats, item }
    //Console logs for testing
    console.log(playersInfo)
    console.log(characterObj)
    //Runs when submit is clicked, dispatches the character object to the back end
    const submitCharacter = () => {
        dispatch({ type: "ADD_PLAYER", payload: characterObj})
        history.push("/success")
    }

    
    //Components used for the component, also loops over the backpack and inventory to display all player info on the DOM
    return (
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
             <div>
                <Typography variant="h4">Player Character Review</Typography>
            </div>
            <Card style={{margin: "5px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Player Info"></CardHeader>
            <div>
                    <div  key={playersInfo.id}>

                    <img style={{width: "197px", height: "255px"}} src={playersInfo.character_img} />

                        <Typography variant="body1" >Player Name: {playersInfo.player_name},   Character Name: {playersInfo.character_name} </Typography> 
                        <Typography variant="body1" >Character Class: {playersInfo.character_class},   Character Level: {playersInfo.character_level},   Current Hit Points: {playersInfo.current_hp},   Total Hit Points: {playersInfo.total_hp}</Typography>

                        <Typography variant="body1" >Armor Class: {playersInfo.armor_class},   Speed: {playersInfo.speed},   Initiative Bonus: {playersInfo.initiative_bonus}</Typography>
                    </div>
            </div>
            </Card>
            <Card style={{margin: "5px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Player Stats"></CardHeader>
            <div>
                    <div>
                        <Typography variant="body1" >Strength: {playerStats.strength}, Bonus: {playerStats.str_bonus},  Save: {playerStats.str_save}</Typography>
                        <Typography variant="body1" >Dexterity: {playerStats.dexterity}, Bonus: {playerStats.dex_bonus},  Save: {playerStats.dex_save}</Typography>
                        <Typography variant="body1" >Constitution: {playerStats.constitution}, Bonus: {playerStats.con_bonus},  Save: {playerStats.con_save}</Typography>
                        <Typography variant="body1">Intelligence: {playerStats.intelligence}, Bonus: {playerStats.int_bonus},  Save: {playerStats.int_save}</Typography>
                        <Typography variant="body1" >Wisdom: {playerStats.wisdom}, Bonus: {playerStats.wis_bonus},  Save: {playerStats.wis_save}</Typography>
                        <Typography variant="body1" >Charisma: {playerStats.charisma}, Bonus: {playerStats.cha_bonus},  Save: {playerStats.cha_save}</Typography>
                    </div>
            </div>
            </Card>
            <Card style={{margin: "5px", padding: "10px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Inventory"></CardHeader>
            <div>
            {item.map(backpackItem => {
                console.log(backpackItem);
                console.log(inventory)
                let item = inventory.find(inventoryItem => Number(inventoryItem.id) === Number(backpackItem.item_id));
                console.log(item)
                return (
                    <div key={backpackItem.item_id}>
                        <Typography variant="body1" >Quantity: {backpackItem.quantity} Item: {item.item_name}</Typography>
                    </div>
                )
            })}
            </div>
            </Card>
            <Button style={{ margin: "5px"}} variant="contained" onClick={submitCharacter}>Submit Character</Button>
        </Container>
    )

}