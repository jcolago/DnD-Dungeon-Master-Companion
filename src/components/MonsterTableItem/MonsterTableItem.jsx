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
                <td><button >Details</button> <button onClick={() => dispatch({type: "DELETE_MONSTER", payload: player.id})}>Delete</button> <button >Display</button></td>
            </tr>
        </>
    )
}