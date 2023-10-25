import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function DetailViewItem({ item }) {
    const dispatch = useDispatch();
    const [newQuantity, setNewQuantity] = useState('');

    useEffect(() => {
        setNewQuantity(item.quantity)
    }, [item])

    console.log(item)


    return(
        <li> Quantity: <input onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity}/>  Item: {item.item_name} <button onClick={() => dispatch({ type: "UPDATE_ITEM",payload: {id: item.id, quantity: newQuantity} })}>Update</button> <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: Number(item.id)})}>Delete</button></li>
    )
}