import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ConditionItem from "../ConditionItem/ConditionItem";

export default function PlayerCard({ player }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const conditions = useSelector((store) => store.conditions);
    const [conditionLength, setConditionLength] = useState('')
    const [conditionId, setConditionId] = useState('')

    console.log (conditions)

    const addCondition = () => {
        let conditionObj = { condition_length: Number(conditionLength), condition_id: Number(conditionId), player_id: Number(player.id)}
        console.log(conditionObj)
        dispatch({ type: 'ADD_CONDITION', payload: conditionObj})
    }

    return (
        <div>
            <div className="info-container">
                <h4>Player Info</h4>
                <p>Player Name: {player.player_name}</p>
                <p>Character Name: {player.character_name}</p>
                <p>Hit Points: <input value={player.current_hp}/> / {player.total_hp}</p> <button onClick={() => console.log(player.id)}>Update</button>
                <p>Armor Class: {player.armor_class}</p>
                <p>Initiative bonus: {player.initiative_bonus} </p>
            </div>
            <div className="condition-container">
                <h4>Conditions</h4>
                <ConditionItem player={player} key={player.length_condition.id}/>
                <input  onChange={(event) => setConditionLength(event.target.value)} type="number" placeholder="Condition Length" value={conditionLength}/>
                <select onChange={(event) => setConditionId(event.target.value)} value={conditionId} name="conditions" id="conditions">
                    <option value="" disabled> Please select a condition</option>
                    {conditions.map(condition =>{
                        return(<option value={condition.id} key={condition.id}>{condition.condition_name}</option>)
                    })}
                </select>
                <button onClick={addCondition}>Add Condition</button>
            </div>
            <button onClick={() => dispatch({ type: 'REMOVE_PLAYER', payload: player.id})}>Remove</button>
        </div>
    )

}