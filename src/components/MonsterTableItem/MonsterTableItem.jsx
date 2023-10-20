import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function MonsterTableItem({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <tr>
                <td>{monster.name}</td>
                <td>{monster.size}</td>
                <td>{monster.hit_points}</td>
                <td>{monster.game_name}</td>
                <td><button onClick={() => history.push(`/details/${player.id}`)}>Details</button> <button onClick={() => dispatch({type: "DELETE_CHARACTER", payload: player.id})}>Delete</button> <button onClick={() => dispatch({ type: 'DISPLAY_PLAYER', payload: player.id})}>Display</button></td>
            </tr>
        </>
    )
}