import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MonsterEntryFrom() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [monsterInfo, setMonsterInfo] = useState({ name: '', alignment: '' , armor_class: '', hit_points: '', speed: '', resistances: '', proficiency_bonus: '', attacks: ''});

    console.log(monsterInfo)

    return(
        <div>
            <form>
                <input type="text" placeholder="Monster Name" value={monsterInfo.name} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="text" placeholder="Alignment" value={monsterInfo.alignment} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="number" placeholder="Armor Class" value={monsterInfo.armor_class} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="number" placeholder="Hit Points" value={monsterInfo.hit_points} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="number" placeholder="Speed" value={monsterInfo.speed} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="text" placeholder="Resistances" value={monsterInfo.resistances} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="number" placeholder="Profiviency Bonus" value={monsterInfo.proficiency_bonus} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <input type="text" placeholder="Attacks" value={monsterInfo.attacks} onChange={(event) => setMonsterInfo(event.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}