import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PlayersTableItem from "../PlayerTableItems/PlayerTableItem";

export default function PlayersTable() {
    const dispatch = useDispatch();
    const players = useSelector((store) => store.players)
    console.log(players);



return (
    <table>
        <thead>
            <tr>
                <th>Player Name</th>
                <th>Character Name</th>
                <th>Character Level</th>
                <th>Game Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {players.map(player => {
            return (
                <PlayersTableItem key={player.id} player={player} />
            )
        })}
        </tbody>
    </table>
)

}