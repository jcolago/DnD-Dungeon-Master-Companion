import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, InputLabel, OutlinedInput, Typography } from "@mui/material";

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
        <Typography style={{margin: "5px"}}> Quantity: 
            <FormControl>
            <OutlinedInput style={{height: "30px", width: "50px"}} onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity}/> 
            </FormControl> Item: {item.item_name} <Button  variant="outlined" onClick={() => dispatch({ type: "UPDATE_ITEM",payload: {id: item.id, quantity: newQuantity} })}>Update</Button> <Button variant="outlined" onClick={() => dispatch({ type: 'DELETE_ITEM', payload: deletedItem})}>Delete</Button></Typography>
    )
}