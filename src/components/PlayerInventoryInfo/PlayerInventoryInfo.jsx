//Imports used for the the component
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, Container, Button, OutlinedInput, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

//Function used for the component
export default function PlayerInventoryInfo() {
    //Instanciates dispatch and history for use in the component
    const dispatch = useDispatch();
    const history = useHistory();
    //Selectors to get the stort of inventory and the player's backpack
    const inventory = useSelector((store) => store.inventory)
    const backpack = useSelector((store) => store.backpack)
   //State used for the new item
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemId, setItemId] = useState('');
    //On change listeners that set the state of the new item
    const handleQuantityChange = (event) => {
        console.log(event)
        setItemQuantity(event.target.value)
    }

    const handleItemChange = (event) => {
        console.log(event)
        setItemId(event.target.value);
    }
    //Takes the new state, bundles it up into an object and sends it to the inverntory reducer array
    const handleAddItem = () => {
        console.log({ quantity: itemQuantity, item_id: itemId });
        let newItem = { quantity: itemQuantity, item_id: itemId }
        dispatch({ type: 'ADD_TO_ARRAY', payload: newItem })
        setItemQuantity('');
        setItemId('');
    }
    //Elements used in the component, loops over the backpack and then finds the matching item id in the inventory store to display the item when it is added to the inventory array
    return (
        <Container style={{border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)"}} >
            <Card style={{ marginTop: "20px", marginBottom: "20px", backgroundColor: "rgb(226, 232, 243, .7)"}}>
                <CardHeader style={{textDecoration: "underline"}} title="Select Inventory"></CardHeader>
                <Typography style={{margin: "5px"}} variant="h6">Select Items and Quantity</Typography>
                <FormControl>
                    <InputLabel style={{margin: "5px"}} htmlFor="quantity">Item Quantity</InputLabel>
                    <OutlinedInput style={{margin: "5px"}} label="Item Quantity" id="quantity" onChange={handleQuantityChange} type="number" placeholder="Item Quantity" value={itemQuantity} />
                </FormControl>
                <FormControl>
                    <InputLabel style={{margin: "5px"}} htmlFor="items">Please Select an Item</InputLabel>
                <Select style={{width: "250px", margin:"5px"}} label="Please Select an Item" onChange={handleItemChange} value={itemId} name="items" id="items">
                    <MenuItem value="" disabled>Please select an item</MenuItem>
                    {inventory.map(item => {
                        return (<MenuItem value={item.id} key={item.id} >{item.item_name}</MenuItem>
                        )
                    })}
                </Select>
                </FormControl>
                <Button style={{marginTop: "14px"}} variant="contained" onClick={handleAddItem}>Add Item</Button>

                {backpack.map(backpackItem => {
                    console.log(backpackItem);
                    console.log(inventory)
                    let item = inventory.find(inventoryItem => Number(inventoryItem.id) === Number(backpackItem.item_id));
                    console.log(item)
                    return (
                        <div style={{margin: "5px"}} key={backpackItem.item_id}>
                            <Typography>Quantity: {backpackItem.quantity} </Typography>
                            <Typography>Item: {item.item_name}</Typography>
                        </div>
                    )
                })}
                <br />
                <Button style={{margin: "5px"}} variant="contained" onClick={() => history.push('/review')}>Review Character</Button>
            </Card>
        </Container>
    )
}