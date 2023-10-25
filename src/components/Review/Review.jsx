import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, Container, Button, CardHeader, Typography } from "@mui/material";


export default function Review() {
    const dispatch = useDispatch();
    const history = useHistory();
    const playersInfo = useSelector((store) => store.playersInfo);
    const playerStats = useSelector((store) => store.stats);
    const item = useSelector((store) => store.backpack);
    const inventory = useSelector((store) => store.inventory)
    const characterObj = {...playersInfo, ...playerStats, item }
    console.log(playersInfo)
    console.log(characterObj)

    const submitCharacter = () => {
        dispatch({ type: "ADD_PLAYER", payload: characterObj})
        history.push("/success")
    }

    

    return (
        <Container style={{border: "2px double black", width: "80%"}}>
             <div>
                <Typography variant="h4">Player Character Review</Typography>
            </div>
            <Card style={{padding: "5px", margin: "auto", width: "90%"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Player Info"></CardHeader>
            <div>
                    <div  key={playersInfo.id}>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Player Name: {playersInfo.player_name} Character Name: {playersInfo.character_name}
                         Character Image: {playersInfo.character_img}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Character Class: {playersInfo.character_class} Character Level: {playersInfo.character_level}Current Hit Points: {playersInfo.current_hp}Total Hit Points: {playersInfo.total_hp}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Armor Class: {playersInfo.armor_class} Speed: {playersInfo.speed} Initiative Bonus: {playersInfo.initiative_bonus}</Typography>
                    </div>
            </div>
            </Card>
            <Card style={{padding: "5px", margin: "auto", width: "90%"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Player Stats"></CardHeader>
            <div>
                    <div>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Strength: {playerStats.strength} Bonus: {playerStats.str_bonus}  Save: {playerStats.str_save}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Dexterity: {playerStats.dexterity} Bonus: {playerStats.dex_bonus}  Save: {playerStats.dex_save}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Constitution: {playerStats.constitution} Bonus: {playerStats.con_bonus}  Save: {playerStats.con_save}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Intelligence: {playerStats.intelligence} Bonus: {playerStats.int_bonus}  Save: {playerStats.int_save}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Wisdom: {playerStats.wisdom} Bonus: {playerStats.wis_bonus}  Save: {playerStats.wis_save}</Typography>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Charisma: {playerStats.charisma} Bonus: {playerStats.cha_bonus}  Save: {playerStats.cha_save}</Typography>
                    </div>
            </div>
            </Card>
            <Card style={{padding: "5px", margin: "auto", width: "90%"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Inventory"></CardHeader>
            <div>
            {item.map(backpackItem => {
                console.log(backpackItem);
                console.log(inventory)
                let item = inventory.find(inventoryItem => Number(inventoryItem.id) === Number(backpackItem.item_id));
                console.log(item)
                return (
                    <div key={backpackItem.item_id}>
                        <Typography variant="body1" style={{fontSize: "20px"}}>Quantity: {backpackItem.quantity} Item: {item.item_name}</Typography>
                    </div>
                )
            })}
            </div>
            </Card>
            <Button style={{ margin: "5px"}} variant="contained" onClick={submitCharacter}>Submit Character</Button>
        </Container>
    )

}