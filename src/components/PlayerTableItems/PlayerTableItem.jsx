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
                <td><button>Details</button><button>Delete</button><button>Display</button></td>
            </tr>
        </>
    )
}