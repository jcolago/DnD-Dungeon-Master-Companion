import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";

export default function GameView() {
const dispatch = useDispatch();
const history = useHistory();
const players = useSelector((store) => store.players)

    return(
        <div>
            <div>
                <h2>Game View</h2>
            </div>
            <div className="player-card">
            {players.map(player => {
                return(
                    player.displayed === true && (
                  <PlayerCard key={player.id} player={player} />
                )
                )
             })}
            </div>
        </div>
    )
}