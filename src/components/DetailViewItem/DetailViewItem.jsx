import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
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

    const deleteItem = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This item will be removed from the character.",
            icon: 'warning',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed){
                Swal.fire(
                    'Deleted!',
                    'The item has been removed.',
                    'success'
                )
                dispatch ({
                    type: 'DELETE_ITEM', 
                    payload: deletedItem
                })
            }
        })

    }



    return(
        <Typography style={{margin: "5px"}}> Quantity: 
            <FormControl>
            <OutlinedInput style={{height: "30px", width: "50px"}} onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity}/> 
            </FormControl> Item: {item.item_name} <Button  variant="outlined" onClick={() => dispatch({ type: "UPDATE_ITEM",payload: {id: item.id, quantity: newQuantity} })}>Update</Button> <Button variant="outlined" onClick={deleteItem}>Delete</Button></Typography>
    )
}