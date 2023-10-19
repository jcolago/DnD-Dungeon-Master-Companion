import React from "react";
import { useDispatch } from "react-redux";

export default function PlayersTableItem({ player }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td>{player.player_name}</td>
                <td>{player.character_name}</td>
                <td>{player.character_level}</td>
                <td>{player.game_name}</td>
                <td><button onClick={() => console.log(player.id)}>Details</button><button onClick={() => dispatch({type: "DELETE_CHARACTER", payload: player.id})}>Delete</button><button onClick={() => dispatch({ type: 'DISPLAY_PLAYER', payload: player.id})}>Display</button></td>
            </tr>
        </>
    )
}