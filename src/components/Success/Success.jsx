import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Success() {
    const history = useHistory();
    const dispatch = useDispatch();

    const newCharacterClick = () => {
        history.push("/playerinfo");
        dispatch ({ type: 'CLEAR_INFO'});
        dispatch ({ type: 'CLEAR_STATS'});
        dispatch ({ type: 'CLEAR_ITEMS'});
    }

    const playerListClick = () => {
        history.push("/players");
        dispatch ({ type: 'CLEAR_INFO'});
        dispatch ({ type: 'CLEAR_STATS'});
        dispatch ({ type: 'CLEAR_ITEMS'});
    }

    return(
        <div>
            <h2>Character successfully entered!</h2>
            <button onClick={newCharacterClick}>Enter New Character</button>
            <button onClick={playerListClick}>Players List</button>
        </div>
    )
}