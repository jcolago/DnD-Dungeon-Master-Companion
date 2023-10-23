import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MonsterTableItem({ monster }) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <tr>
                <td>{monster.name}</td>
                <td>{monster.size}</td>
                <td>{monster.hit_points}</td>
                <td>{monster.game_name}</td>
                <td><button onClick={() => history.push(`/monsterdetails/${monster.id}`)}>Details</button> <button onClick={() => dispatch({type: "DELETE_MONSTER", payload: monster.id})}>Delete</button> <button>Display</button></td>
            </tr>
        </>
    )
}