import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, OutlinedInput, InputLabel, FormControl, Container, Button, CardHeader, TextField, Select, MenuItem } from "@mui/material";

export default function MonsterEntryFrom() {
    const dispatch = useDispatch();
    const history = useHistory();

    const games = useSelector((store) => store.games)

    const [monsterName, setMonsterName] = useState('');
    const [monsterSize, setMonsterSize] = useState('');
    const [monsterAlignment, setMonsterAlignment] = useState('');
    const [monsterArmorClass, setMonsterArmorClass] = useState('');
    const [monsterHitPoints, setMonsterHitPoints] = useState('');
    const [monsterSpeed, setMonsterSpeed] = useState('');
    const [monsterResistances, setMonsterResistances] = useState('');
    const [monsterProficiencyBonus, setMonsterProficiencyBonus] = useState('');
    const [monsterAttacks, setMonsterAttacks] = useState('');
    const [gameId, setGameId] = useState('')

    const monsterObj = { name: monsterName, size: monsterSize, alignment: monsterAlignment, armor_class: monsterArmorClass, hit_points: monsterHitPoints, speed: monsterSpeed, resistances: monsterResistances, proficiency_bonus: monsterProficiencyBonus, attacks: monsterAttacks, game_id: gameId }

    console.log(monsterObj)

    const handleSubmit = (event) => {
        event.preventDefault
        dispatch({ type: "ADD_MONSTER", payload: monsterObj });
        setMonsterName('');
        setMonsterSize('');
        setMonsterAlignment('');
        setMonsterArmorClass('');
        setMonsterHitPoints('');
        setMonsterSpeed('');
        setMonsterResistances('');
        setMonsterProficiencyBonus('');
        setMonsterAttacks('');
        setGameId('');
        history.push("/monstersuccess")

    }

    return (
        <Container style={{border: "2px double black", width: "100%", backgroundColor: "rgb(128, 150, 191, .5)"}}>
            <Card style={{margin: "15px", padding: "5px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardHeader title="Enter Monster Info" style={{ textDecoration: "underline" }} ></CardHeader>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <InputLabel  htmlFor="monster-name" style={{margin: "5px"}}>Monster Name</InputLabel>
                        <OutlinedInput required style={{margin: "5px"}} label="Monster Name" id="monster-name" type="text" placeholder="Monster Name" value={monsterName} onChange={(event) => setMonsterName(event.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="monster-size" style={{margin: "5px"}}>Monster Size</InputLabel>
                        <OutlinedInput style={{margin: "5px"}} label="Monster Size" id="monster-size" type="text" placeholder="Monster Size" value={monsterSize} onChange={(event) => setMonsterSize(event.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="alignment" style={{margin: "5px"}}>Alignment</InputLabel>
                        <OutlinedInput style={{margin: "5px"}} label="Alignment" id="alignment" type="text" placeholder="Alignment" value={monsterAlignment} onChange={(event) => setMonsterAlignment(event.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="armor-class" style={{margin: "5px"}}>Armor Class</InputLabel>
                        <OutlinedInput required style={{margin: "5px"}} label="Armor Class" id="armor-class" type="number" placeholder="Armor Class" value={monsterArmorClass} onChange={(event) => setMonsterArmorClass(event.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel  htmlFor="hit-points" style={{margin: "5px"}}>Hit Points</InputLabel>
                        <OutlinedInput required style={{margin: "5px"}} label="Hit Point" id="hit-points" type="number" placeholder="Hit Points" value={monsterHitPoints} onChange={(event) => setMonsterHitPoints(event.target.value)} />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="speed" style={{margin: "5px"}}>Speed</InputLabel>
                        <OutlinedInput required style={{margin: "5px"}} label="Speed" id="speed" type="number" placeholder="Speed" value={monsterSpeed} onChange={(event) => setMonsterSpeed(event.target.value)} />
                    </FormControl>
                    <TextField style={{margin: "5px"}} label="Resistances" type="text" placeholder="Resistances" value={monsterResistances} onChange={(event) => setMonsterResistances(event.target.value)} />
                    <FormControl>
                        <InputLabel htmlFor="proficiency-bonus" style={{margin: "5px"}}>Proficiency Bonus</InputLabel>
                        <OutlinedInput style={{margin: "5px"}} label="Proficiency Bonus" id="proficiency-bonus" type="number" placeholder="Proficiency Bonus" value={monsterProficiencyBonus} onChange={(event) => setMonsterProficiencyBonus(event.target.value)} />
                    </FormControl>
                    <TextField style={{margin: "5px"}} label="Attacks" type="text" placeholder="Attacks" value={monsterAttacks} onChange={(event) => setMonsterAttacks(event.target.value)} />
                    <FormControl>
                        <InputLabel style={{margin: "5px"}} htmlFor="game-name" >Select a Game</InputLabel>
                        <Select style={{width: "195px", margin: "5px"}} label="Select a Game" onChange={(event) => setGameId(event.target.value)} value={gameId} name="game-name" id="game-name">
                            <MenuItem value="" disabled>Please select a game name</MenuItem>
                            {games.map(game => {
                                return (<MenuItem value={game.id} key={game.id} >{game.game_name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <Button variant="contained" style={{marginTop: "22px", marginLeft: "935px"}} type="submit">Submit</Button>
                </form>
            </Card>
        </Container>
    )
}