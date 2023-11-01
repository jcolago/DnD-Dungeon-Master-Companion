//Imports used for this component
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Button, FormControl, OutlinedInput, Typography } from "@mui/material";
//Function for the detail view item
export default function DetailViewItem({ item }) {
    //Instanciates dispatch for use
    const dispatch = useDispatch();
    //State for setting a new quantity for an item
    const [newQuantity, setNewQuantity] = useState('');
    //Grabs the state for the players store to get the player id so it can be sent in the data payload
    const players = useSelector((store) => store.details)
    const id = players[0].id
    //useEffect that sets the item quantity when the item data is passed and rendered
    useEffect(() => {
        setNewQuantity(item.quantity)
    }, [item])
    //Console logs for testing
    console.log(item)
    console.log(id)
    //Variables used in the dispatches for button clicks
    let deletedItem = {itemId: Number(item.id), playerId: id}
    let updatedItem = {id: item.id, quantity: newQuantity}
    //Function runs when delete button is clicked on an item. Sends an alert to the user to confirm the deletion of the item before running the dispatch
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
    //Function that runs when the update buttion is clicked to update and item's quantity. Send an alert for the user to see that the item has been updated.
    const handleUpdate = () => {
        Swal.fire(
            'Updated!',
            'The item quantity has been updated.',
            'success'
        )
        dispatch ({
            type: "UPDATE_ITEM", 
            payload: updatedItem
        })
    }

    //Elements used for the component
    return(
        
        <Typography style={{margin: "5px"}}> Quantity: 
            <FormControl>
            <OutlinedInput style={{height: "30px", width: "50px"}} onChange={(event) => setNewQuantity(event.target.value)} value={newQuantity}/> 
            </FormControl> Item: {item.item_name} <Button  variant="contained" onClick={handleUpdate}>Update</Button> <Button variant="outlined" style={{backgroundColor: "red", color: "white"}} onClick={deleteItem}>Delete</Button></Typography>
            
    )
}