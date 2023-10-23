import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ConditionItemSingle from "../ConditionItemSingle/ConditionItemSingle";

export default function ConditionItem({ player }) {
    const dispatch = useDispatch();
    const [newlength, setNewLength] = useState('');

    useEffect(() => {
        setNewLength(player.length_condition.length)
    }, [player])


    return(
        <div>
            {player.length_condition.map (condition => {
            return (
             <ConditionItemSingle key={condition.id}  condition={condition}/>
            )
        })}
        </div>
    )
}