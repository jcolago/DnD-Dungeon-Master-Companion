import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


export default function ConditionItemSingle({ condition }) {

    const dispatch = useDispatch();
    const [newlength, setNewLength] = useState('');

    useEffect(() => {
        setNewLength(condition.length)
    }, [condition])

    console.log(newlength)
    return(
        <div>
       <p> <input onChange={(event) => setNewLength(event.target.value)} value={newlength} />{condition.condition_name}</p>
        <button onClick={() => dispatch({ type: 'UPDATE_CONDITION', payload: {id: condition.id, length: newlength}})}>Update</button>
        <button onClick={() => dispatch({ type: 'DELETE_CONDITION', payload: Number(condition.id)})}>Delete</button>
        </div>
    )
}