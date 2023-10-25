import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailViewItem({ item }) {
    const dispatch = useDispatch();
    const [newQuantity, setNewQuantity] = useState('');
    const players = useSelector((store) => store.details)
    const id = players[0].id
    useEffect(() => {
        setNewQuantity(item.quantity)
    }, [item])

    console.log(item)
    console.log(id)
    let deletedItem = {itemId: Number(item.id), playerId: id}



    return(
        <li><Typography> Quantity: <input onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity}/>  Item: {item.item_name} <button onClick={() => dispatch({ type: "UPDATE_ITEM",payload: {id: item.id, quantity: newQuantity} })}>Update</button> <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: deletedItem})}>Delete</button></Typography></li>
    )
}