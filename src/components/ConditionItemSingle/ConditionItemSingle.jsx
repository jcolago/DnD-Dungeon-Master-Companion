import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ConditionItemSingle({ condition }) {

    const dispatch = useDispatch();
    const [newlength, setNewLength] = useState('');

    useEffect(() => {
        setNewLength(condition.length)
    }, [condition])

    return(
        <div>
        <input onChange={(event) => setNewLength(event.target.value)} value={newlength} /><p>{condition.condition_name}</p>
        <button onClick={() => console.log(condition.id)}>Update</button>
        <button onClick={() => dispatch({ type: 'DELETE_CONDITION', payload: Number(condition.id)})}>Delete</button>
        </div>
    )
}