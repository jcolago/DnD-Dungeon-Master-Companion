import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayersTableItem({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

    

    return (
        <>
            <tr>
                <td>{player.player_name}</td>
                <td>{player.character_name}</td>
                <td>{player.character_level}</td>
                <td>{player.game_name}</td>
                <td><button onClick={() => history.push(`/details/${player.id}`)}>Details</button> <button onClick={() => dispatch({type: "DELETE_CHARACTER", payload: player.id})}>Delete</button> <button onClick={() => dispatch({ type: 'DISPLAY_PLAYER', payload: player.id})}>Display</button></td>
            </tr>
        </>
    )
}