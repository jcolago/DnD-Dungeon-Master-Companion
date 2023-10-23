import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerCard({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div>
            <div className="info-container">
                <h4>Player Info</h4>
                <p>Player Name: {player.player_name}</p>
                <p>Character Name: {player.character_name}</p>
                <p>Hit Points: {player.current_hp} / {player.total_hp}</p>
                <p>Armor Class: {player.armor_class}</p>
                <p>Initiative bonus: {player.initiative_bonus} </p>
            </div>
            <div className="condition-container">
                <h4>Conditions</h4>
                <p> {player.condition_length}</p><p> {player.condition_name}</p>
            </div>
            <button onClick={() => dispatch({ type: 'REMOVE_PLAYER', payload: player.id})}>Remove</button>
        </div>
    )

}