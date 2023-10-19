import React, { useEffect } from "react";
import { useSelector } from "react-redux";


export default function PlayersTable() {
    const players = useSelector((store) => store.rootReducer.players)
    console.log(players)

return (
    <table>
        <thead>
            <tr>
                <th>Player Name</th>
                <th>Character Name</th>
                <th>Character Class</th>
                <th>Character Level</th>
                <th>Game Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {players.map(players => {
            return (

            )
        })}
        </tbody>
    </table>
)

}