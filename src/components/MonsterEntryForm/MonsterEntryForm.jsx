import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MonsterEntryFrom() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [monsterName, setMonsterName] = useState('');
    const [monsterSize, setMonsterSize] = useState('');
    const [monsterAlignment, setMonsterAlignment] = useState('');
    const [monsterArmorClass, setMonsterArmorClass] = useState('');
    const [monsterHitPoints, setMonsterHitPoints] = useState('');
    const [monsterSpeed, setMonsterSpeed] = useState('');
    const [monsterResistances, setMonsterResistances] = useState('');
    const [monsterProficiencyBonus, setMonsterProficiencyBonus] = useState('');
    const [monsterAttacks, setMonsterAttacks] = useState('');

    const monsterObj = { name: monsterName, size: monsterSize, alignment: monsterAlignment, armor_class: monsterArmorClass, hit_points: monsterHitPoints, speed: monsterSpeed, resistances: monsterResistances, proficiency_bonus: monsterProficiencyBonus, attacks: monsterAttacks}

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
                <input type="text" placeholder="Resistances" value={monsterResistances} onChange={(event) => setMonsterResistances(event.target.value)}/>
                <input type="number" placeholder="Proficiency Bonus" value={monsterProficiencyBonus} onChange={(event) => setMonsterProficiencyBonus(event.target.value)}/>
                <input type="text" placeholder="Attacks" value={monsterAttacks} onChange={(event) => setMonsterAttacks(event.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}