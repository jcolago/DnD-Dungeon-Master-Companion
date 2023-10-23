import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ConditionItem({ player }) {
    const dispatch = useDispatch();

    return(
        <div>
            {player.length_condition.map (condition => {
            return (
                <div>
            <p>{condition.length}</p><p>{condition.condition_name}</p>
            </div>
            )
        })}
        </div>
    )
}