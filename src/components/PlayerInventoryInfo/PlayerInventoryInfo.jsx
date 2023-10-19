import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


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
        history.push('/review')
    }

    return (
        <div>
            <div>
                <h2>Select Inventory</h2>
            </div>
            <br />
            <label>Choose Items and quantity</label>
            <input onChange={handleQuantityChange} type="number" placeholder="Quantity" value={itemQuantity} />
            <select onChange={handleItemChange} value={itemId} name="items" id="items">
                <option value="" disabled>Please select an item</option>
                {inventory.map(item => {
                    return (<option value={item.id} key={item.id} >{item.item_name}</option>
                    )
                })}
            </select>
            <button onClick={handleAddItem}>Add Item</button>
 
            {backpack.map(backpackItem => {
                console.log(backpackItem);
                console.log(inventory)
                let item = inventory.find(inventoryItem => Number(inventoryItem.id) === Number(backpackItem.item_id));
                console.log(item)
                return (
                    <div key={backpackItem.item_id}>
                        <p>Quantity: {backpackItem.quantity} </p>
                        <p>Item: {item.item_name}</p>
                    </div>
                )
            })}
        </div>
    )
}