import React, { useEffect } from "react";
import ConditionItemSingle from "../ConditionItemSingle/ConditionItemSingle";

export default function ConditionItem({ player }) {

console.log(player)


    return(
        <div>
             <ConditionItemSingle key={player.id}  condition={player}/>
        </div>
    )
}