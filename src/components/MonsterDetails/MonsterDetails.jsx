import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

export default function MonsterDetails() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    const monster = useSelector((store) => store.monsterdetails)

    useEffect(() => {
        dispatch({ type: 'FETCH_MONSTER_DETAILS', payload: id })
    }, [])


    console.log(id)
    console.log(monster)
    return (
        <div>
            <div>
                <h2>Monster Details</h2>
            </div>

            {/* {monster.map(monster => {
                return ( */}
                    <div>
                        <p>Monster: {monster[0].name}</p>
                        <p>Alignment: {monster[0].alignment}</p>
                        <p>Armor Class: {monster[0].armor_class}</p>
                        <p>Hit Points: {monster[0].hit_points}</p>
                        <p>Speed: {monster[0].speed}</p>
                        <p>Resistances: {monster[0].resistances}</p>
                        <p>Proficiency Bonus: {monster[0].proficiency_bonus}</p>
                        <p>Attacks: {monster[0].attacks}</p>
                        <button onClick={() => history.push('/monsters')}>Monster List</button>
                    </div>
                {/* )
            })} */}
        </div>
    )
}