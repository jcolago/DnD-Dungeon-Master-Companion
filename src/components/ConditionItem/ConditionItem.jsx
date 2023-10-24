import React, { useEffect } from "react";
import ConditionItemSingle from "../ConditionItemSingle/ConditionItemSingle";

export default function ConditionItem({ player }) {




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