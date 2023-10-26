import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Select, MenuItem, Button, CardHeader } from "@mui/material";

export default function PlayerInfo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const games = useSelector((state) => state.games)
    console.log(games)

    let [newPlayerInfo, setNewPlayerInfo] = useState({
        player_name: "", character_name: "", character_img: "",
        character_class: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", game_id: ""
    })

    const handlePlayerNameChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, player_name: event.target.value })
    }

    const handleCharacterNameChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_name: event.target.value })
    }

    const handleCharacterImageChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_img: event.target.value })
    }

    const handleCharacterClassChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_class: event.target.value })
    }

    const handleCharacterLevelChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, character_level: event.target.value })
    }

    const handleCurrentHpChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, current_hp: event.target.value })
    }

    const handleTotalHpChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, total_hp: event.target.value })
    }

    const handleArmorClassChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, armor_class: event.target.value })
    }

    const handleSpeedChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, speed: event.target.value })
    }

    const handleInitiativeBonusChange = (event) => {
        console.log(event);
        setNewPlayerInfo({ ...newPlayerInfo, initiative_bonus: event.target.value })
    }

    const handleGameChange = (event) => {
        console.log(event)
        setNewPlayerInfo({ ...newPlayerInfo, game_id: event.target.value })
    }

    const addNewPlayerInfo = (event) => {
        event.preventDefault();
        console.log(newPlayerInfo)
        dispatch({ type: 'SET_PLAYERS_INFO', payload: newPlayerInfo })
        setNewPlayerInfo({ player_name: "", character_name: "", character_img: "", character_class: "", character_level: "", current_hp: "", total_hp: "", armor_class: "", speed: "", initiative_bonus: "", game_id: "" });
        history.push("/stats")
    }

    return (
        <Container>
            <Card>
                <CardHeader title="Enter Character Info Below!" />
                <center>
                <FormControl>
                    <form  onSubmit={addNewPlayerInfo}>
                        <FormControl>
                        <InputLabel htmlFor="player-name" style={{ margin: "5px" }}> Player Name</InputLabel>
                        <OutlinedInput label="Player Name" id="player-name" style={{ margin: "5px" }} type="text" placeholder="Player Name" value={newPlayerInfo.player_name} onChange={handlePlayerNameChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="character-name" style={{ margin: "5px" }}>Character Name</InputLabel>
                        <OutlinedInput id="character-name" label="Character Name" style={{ margin: "5px" }} type="text" placeholder="Character Name" value={newPlayerInfo.character_name} onChange={handleCharacterNameChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="character-image" style={{ margin: "5px" }}>Character Image</InputLabel>
                        <OutlinedInput id="character-image" label="Character Image" style={{ margin: "5px" }} type="text" placeholder="Character Image URL" value={newPlayerInfo.character_img} onChange={handleCharacterImageChange} />
                        </FormControl>
                        <FormControl >
                        <InputLabel htmlFor="character-class" style={{ margin: "5px" }}>Character Class</InputLabel>
                        <OutlinedInput id="character-class" label="Character Class" style={{ margin: "5px" }} type="text" placeholder="Character Class" value={newPlayerInfo.character_class} onChange={handleCharacterClassChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="character-level" style={{ margin: "5px" }}>Character Level</InputLabel>
                        <OutlinedInput id="character-level" label="Character Level" style={{ margin: "5px" }} type="number" placeholder="Character Level" value={newPlayerInfo.character_level} onChange={handleCharacterLevelChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="current-hp" style={{ margin: "5px" }}>Current Hit Points</InputLabel>
                        <OutlinedInput id="current-hp" label="Current Hit Points" style={{ margin: "5px" }} type="number" placeholder="Character Current HP" value={newPlayerInfo.current_hp} onChange={handleCurrentHpChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="total-hp" style={{ margin: "5px" }}>Total Hit Points</InputLabel>
                        <OutlinedInput id="total-hp" label="Total Hit Points" style={{ margin: "5px" }} type="number" placeholder="Character Total HP" value={newPlayerInfo.total_hp} onChange={handleTotalHpChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="armor-class" style={{ margin: "5px" }}>Armor Class</InputLabel>
                        <OutlinedInput id="armor-class" label="Armor Class" style={{ margin: "5px" }} type="number" placeholder="Character Armor Class" value={newPlayerInfo.armor_class} onChange={handleArmorClassChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel htmlFor="speed" style={{ margin: "5px" }}>Speed</InputLabel>
                        <OutlinedInput id="speed" label="Speed" style={{ margin: "5px" }} type="number" placeholder="Character Speed" value={newPlayerInfo.speed} onChange={handleSpeedChange} />
                        </FormControl>
                        <FormControl>
                        <InputLabel html="initiative-bonus" style={{ margin: "5px" }}>Initiative Bonus</InputLabel>
                        <OutlinedInput id="initiative-bonus" label="Initiative Bonus" style={{ margin: "5px" }} type="number" placeholder="Character Initiative Bonus" value={newPlayerInfo.initiative_bonus} onChange={handleInitiativeBonusChange} />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="game-name" style={{margin: "5px"}}>Please Select a Game</InputLabel>
                        <Select onChange={handleGameChange} label="Please Select a Game" style={{width: "300px", margin: "5px"}} value={newPlayerInfo.game_id} name="game-name" id="game-name">
                            <MenuItem value="" disabled>Please select a game name</MenuItem>
                            {games.map(game => {
                                return (<MenuItem value={game.id} key={game.id} >{game.game_name}</MenuItem>
                                )
                            })}
                        </Select>
                        </FormControl>
                        <Button style={{marginTop: "23px"}} variant="contained" type="submit">Submit</Button>
                    </form>
                </FormControl>
                </center>
            </Card>
        </Container>
    )
}