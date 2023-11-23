//Imports for component
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Select, MenuItem, Button, CardHeader } from "@mui/material";
//Function for componet
export default function PlayerInfo() {
    //Instanciates dispatch and history for use in the component
    const dispatch = useDispatch();
    const history = useHistory();
    //Saves off the games list in the games reducer for use in the form
    const games = useSelector((state) => state.games)
    //State for the info in the form - needs to be refactored
    const [playerName, setPlayerName] = useState("");
    const [characterName, setCharacterName] = useState("");
    const [characterImg, setCharacterImg] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [characterLevel, setCharacterLevel] = useState("");
    const [characterHp, setCharacterHp] = useState("");
    const [totalHp, setTotalHp] = useState("");
    const [armorClass, setArmorClass] = useState("");
    const [speed, setSpeed] = useState("");
    const [initiativeBonus, setInitativeBonus] = useState("");
    const [gameId, setGameId] = useState("")

    //Runs on click of the submit button. Takes the player data from the state and send the object to the back end to be added to the database at end of form. Resets state as well.
    const addNewPlayerInfo = (event) => {
        event.preventDefault();
        const newPlayerInfo = {
            player_name: playerName, character_name: characterName, character_img: characterImg, character_class: characterClass, character_level: characterLevel, current_hp: characterHp, total_hp: totalHp, armor_class: armorClass, speed: speed, initiative_bonus: initiativeBonus, game_id: gameId
        }
        console.log(newPlayerInfo)
        dispatch({ type: 'SET_PLAYERS_INFO', payload: newPlayerInfo })
        setPlayerName("");
        setCharacterName("");
        setCharacterImg("");
        setCharacterClass("");
        setCharacterLevel("");
        setCharacterHp("");
        setTotalHp("");
        setArmorClass("");
        setSpeed("")
        setInitativeBonus("");
        setGameId("")
        history.push("/stats")
    }
    //Elements used for the component, each input in the form is tied to one of the keys of the player info object, most likely going to be refactoring this
    return (
        <Container style={{ border: "2px double black", backgroundColor: "rgb(128, 150, 191, .5)" }}>
            <Card style={{ marginTop: "20px", marginBottom: "20px", backgroundColor: "rgb(226, 232, 243, .7)" }}>
                <CardHeader style={{ textDecoration: "underline" }} title="Enter Character Info Below" />
                <center>
                    <FormControl>
                        <form onSubmit={addNewPlayerInfo}>
                            <FormControl>
                                <InputLabel htmlFor="player-name" style={{ margin: "5px" }}> Player Name</InputLabel>
                                <OutlinedInput required label="Player Name" id="player-name" style={{ margin: "5px" }} type="text" placeholder="Player Name" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="character-name" style={{ margin: "5px" }}>Character Name</InputLabel>
                                <OutlinedInput required id="character-name" label="Character Name" style={{ margin: "5px" }} type="text" placeholder="Character Name" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="character-image" style={{ margin: "5px" }}>Character Image</InputLabel>
                                <OutlinedInput id="character-image" label="Character Image" style={{ margin: "5px" }} type="text" placeholder="Character Image URL" value={characterImg} onChange={(e) => setCharacterImg(e.target.value)} />
                            </FormControl>
                            <FormControl >
                                <InputLabel htmlFor="character-class" style={{ margin: "5px" }}>Character Class</InputLabel>
                                <OutlinedInput id="character-class" label="Character Class" style={{ margin: "5px" }} type="text" placeholder="Character Class" value={characterClass} onChange={(e) => setCharacterClass(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel required htmlFor="character-level" style={{ margin: "5px" }}>Character Level</InputLabel>
                                <OutlinedInput id="character-level" label="Character Level" style={{ margin: "5px" }} type="number" placeholder="Character Level" value={characterLevel} onChange={(e) => setCharacterLevel(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel required htmlFor="current-hp" style={{ margin: "5px" }}>Current Hit Points</InputLabel>
                                <OutlinedInput id="current-hp" label="Current Hit Points" style={{ margin: "5px" }} type="number" placeholder="Character Current HP" value={characterHp} onChange={(e) => setCharacterHp(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="total-hp" style={{ margin: "5px" }}>Total Hit Points</InputLabel>
                                <OutlinedInput required id="total-hp" label="Total Hit Points" style={{ margin: "5px" }} type="number" placeholder="Character Total HP" value={totalHp} onChange={(e) => setTotalHp(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel required htmlFor="armor-class" style={{ margin: "5px" }}>Armor Class</InputLabel>
                                <OutlinedInput id="armor-class" label="Armor Class" style={{ margin: "5px" }} type="number" placeholder="Character Armor Class" value={armorClass} onChange={(e) => setArmorClass(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="speed" style={{ margin: "5px" }}>Speed</InputLabel>
                                <OutlinedInput id="speed" label="Speed" style={{ margin: "5px" }} type="number" placeholder="Character Speed" value={speed} onChange={(e) => setSpeed(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel html="initiative-bonus" style={{ margin: "5px" }}>Initiative Bonus</InputLabel>
                                <OutlinedInput required id="initiative-bonus" label="Initiative Bonus" style={{ margin: "5px" }} type="number" placeholder="Character Initiative Bonus" value={initiativeBonus} onChange={(e) => setInitativeBonus(e.target.value)} />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="game-name" style={{ margin: "5px" }}>Please Select a Game</InputLabel>
                                <Select onChange={(e) => setGameId(e.target.value)} label="Please Select a Game" style={{ width: "300px", margin: "5px" }} value={gameId} name="game-name" id="game-name">
                                    <MenuItem value="" disabled>Please select a game name</MenuItem>
                                    {games.map(game => {
                                        return (<MenuItem value={game.id} key={game.id} >{game.game_name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            <Button style={{ marginTop: "23px" }} variant="contained" type="submit">Submit</Button>
                        </form>
                    </FormControl>
                </center>
            </Card>
        </Container>
    )
}