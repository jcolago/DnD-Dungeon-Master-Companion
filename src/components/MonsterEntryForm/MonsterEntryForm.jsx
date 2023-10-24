import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

    const monsterObj = { name: monsterName, size: monsterSize, alignment: monsterAlignment, armor_class: monsterArmorClass, hit_points: monsterHitPoints, speed: monsterSpeed, resistances: monsterResistances, proficiency_bonus: monsterProficiencyBonus, attacks: monsterAttacks, game_id: gameId}

    console.log(monsterObj)

    const handleSubmit = (event) => {
        event.preventDefault
        dispatch({ type: "ADD_MONSTER", payload: monsterObj});
        setMonsterName('');
        setMonsterSize('');
        setMonsterAlignment('');
        setMonsterArmorClass('');
        setMonsterHitPoints('');
        setMonsterSpeed('');
        setMonsterResistances('');
        setMonsterProficiencyBonus('');
        setMonsterAttacks('');
        setGameId('')

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Monster Name" value={monsterName} onChange={(event) => setMonsterName(event.target.value)}/>
                <input type="text" placeholder="Monster Size" value={monsterSize} onChange={(event) => setMonsterSize(event.target.value)}/>
                <input type="text" placeholder="Alignment" value={monsterAlignment} onChange={(event) => setMonsterAlignment(event.target.value)}/>
                <input type="number" placeholder="Armor Class" value={monsterArmorClass} onChange={(event) => setMonsterArmorClass(event.target.value)}/>
                <input type="number" placeholder="Hit Points" value={monsterHitPoints} onChange={(event) => setMonsterHitPoints(event.target.value)}/>
                <input type="number" placeholder="Speed" value={monsterSpeed} onChange={(event) => setMonsterSpeed(event.target.value)}/>
                <textarea type="text" placeholder="Resistances" value={monsterResistances} onChange={(event) => setMonsterResistances(event.target.value)}/>
                <input type="number" placeholder="Proficiency Bonus" value={monsterProficiencyBonus} onChange={(event) => setMonsterProficiencyBonus(event.target.value)}/>
                <textarea type="text" placeholder="Attacks" value={monsterAttacks} onChange={(event) => setMonsterAttacks(event.target.value)}/>
                <br />
                <select onChange={(event) => setGameId(event.target.value)} value={gameId} name="game-name" id="game-name">
                <option value="" disabled>Please select a game name</option>
                {games.map(game => {
                    return (<option value={game.id} key={game.id} >{game.game_name}</option>
                    )
                })}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}