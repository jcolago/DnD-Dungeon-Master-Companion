import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Card, CardHeader, Container, Button, Grid, OutlinedInput, Typography, Select, MenuItem, FormControl, InputLabel } from "@mui/material";


export default function PlayerInventoryInfo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const inventory = useSelector((store) => store.inventory)
    const backpack = useSelector((store) => store.backpack)
    // let [newItem, setNewItem] = useState({quantity: "" , item_id: "" })
    const [itemQuantity, setItemQuantity] = useState('0');
    const [itemId, setItemId] = useState('');

    const handleQuantityChange = (event) => {
        console.log(event)
        // setNewItem({...newItem, quantity: event.target.value})
        setItemQuantity(event.target.value)
    }

    const handleItemChange = (event) => {
        console.log(event)
        // setNewItem({...newItem, item_id: event.target.value})
        setItemId(event.target.value);
    }

    const handleAddItem = () => {
        console.log({ quantity: itemQuantity, item_id: itemId });
        let newItem = { quantity: itemQuantity, item_id: itemId }
        dispatch({ type: 'ADD_TO_ARRAY', payload: newItem })
        setItemQuantity('0');
        setItemId('');
    }

    return (
        <Container style={{border: "2px double black", padding: "5px"}} >
            <Card style={{ padding: "5px", margin: "auto", width: "70%" }}>
                <CardHeader title="Select Inventory"></CardHeader>
                <Typography variant="h6">Select Items and Quantity</Typography>
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
                <Button style={{margin: "5px"}} variant="outlined" onClick={() => history.push('/review')}>Review Character</Button>
            </Card>
        </Container>
    )
}