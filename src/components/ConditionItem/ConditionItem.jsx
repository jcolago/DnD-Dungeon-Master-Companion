//Imports used for this component
import React from "react";
import ConditionItemSingle from "../ConditionItemSingle/ConditionItemSingle";
//Function renders component. This component uses the condition single item component to display conditions on the game view
export default function ConditionItem({ player }) {

console.log(player)


    return(
        <div>
             <ConditionItemSingle key={player.id}  condition={player}/>
        </div>
    )
}