import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MonsterEntryFrom() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [monsterInfo, setMonsterInfo] = useState({ name: '', alignment: '' , armor_class: '', hit_points: '', speed: '', resistances: '', proficiency_bonus: '', attacks: ''});

    return(
        <div>
            <form>
                <input type="text" placeholder="Monster Name" value={monsterInfo.name}/>
                <input type="text" placeholder="Alignment" value={monsterInfo.alignment}/>
                <input type="number" placeholder="Armor Class" value={monsterInfo.armor_class}/>
                <input type="number" placeholder="Hit Points" value={monsterInfo.hit_points}/>
                <input type="number" placeholder="Speed" value={monsterInfo.speed}/>
                <input type="text" placeholder="Resistances" value={monsterInfo.resistances}/>
                <input type="number" placeholder="Profiviency Bonus" value={monsterInfo.proficiency_bonus}/>
                <input type="text" placeholder="Attacks" value={monsterInfo.attacks}/>
                <button>Submit</button>
            </form>
        </div>
    )
}