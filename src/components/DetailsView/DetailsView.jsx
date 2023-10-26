import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, Container, Button,  Typography, Select, MenuItem, FormControl, InputLabel, TextField } from "@mui/material";
import InventoryItem from "../InventoryItem/InventoryItem";

export default function DetailsView() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    const players = useSelector((store) => store.details);
    const inventory = useSelector((store) => store.inventory);
    const [itemQuantity, setItemQuantity] = useState('0');
    const [itemId, setItemId] = useState('');

    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYER_DETAILS', payload: id });
    }, []);

    const handleAddItem = () => {
        dispatch({ type: 'ADD_ITEM', payload: { quantity: itemQuantity, inventory_id: itemId, id } });
        setItemQuantity('0'),
            setItemId('');
    }
    console.log(players)
    console.log(id)
    return (
        <Container style={{ border: "1px solid black", padding: "5px" }}>
            {players.map(player => {
                return (<div key={player.id}>
                    <Card style={{ width: "20%" }}>
                        <img src={player.character_img} />
                    </Card>
                    <Card style={{ background: "darkkhaki", width: "20%" }}>
                        <Typography>Player Name: {player.player_name}</Typography>
                        <Typography>Character Name: {player.character_name}</Typography>
                        <Typography>Character Class: {player.character_class}</Typography>
                        <Typography>Character Level: {player.character_level}</Typography>
                        <Typography>Current Hit Points: {player.current_hp}</Typography>
                        <Typography>Total Hit Points: {player.total_hp}</Typography>
                        <Typography>Armor Class: {player.armor_class}</Typography>
                        <Typography>Speed: {player.speed}</Typography>
                        <Typography>Initiative Bonus: {player.initiative_bonus}</Typography>
                    </Card>
                    <Card>
                        <Typography>Strength: {player.strength} Bonus: {player.str_bonus}  Save: {player.str_save}</Typography>
                        <Typography>Dexterity: {player.dexterity} Bonus: {player.dex_bonus}  Save: {player.dex_save}</Typography>
                        <Typography>Constitution: {player.constitution} Bonus: {player.con_bonus}  Save: {player.con_save}</Typography>
                        <Typography>Intelligence: {player.intelligence} Bonus: {player.int_bonus}  Save: {player.int_save}</Typography>
                        <Typography>Wisdom: {player.wisdom} Bonus: {player.wis_bonus}  Save: {player.wis_save}</Typography>
                        <Typography>Charisma: {player.charisma} Bonus: {player.cha_bonus}  Save: {player.cha_save}</Typography>
                    </Card>
                    {player.quantity_items.map(item => {

                        return (
                            <ul>
                                <InventoryItem key={item.id} item={item} />
                            </ul>
                        )
                    })}

                    <div>
                        <Typography variant="h5" gutterBottom style={{ textDecoration: "underline" }}>Select Inventory</Typography>
                    </div>
                    <div style={{ marginTop: "5px"}}>
                    <Typography>Choose Items and quantity</Typography>
                    <TextField size="small" onChange={(event) => setItemQuantity(event.target.value)} type="number" label='Quantity' placeholder="Quantity" value={itemQuantity}></TextField>
                    <FormControl>
                        <InputLabel id="items" size="small" >Items</InputLabel>
                    <Select size="small" label="Items" style={{width: "200px", marginLeft: "5px"}} onChange={(event) => setItemId(event.target.value)} value={itemId} name="items" id="items">
                        <MenuItem value="" disabled>Please select an item</MenuItem>
                        {inventory.map(item => {
                            return (<MenuItem value={item.id} key={item.id} >{item.item_name}</MenuItem>
                            )
                        })}
                    </Select>
                    
                    </FormControl> <Button style={{height: "40px"}} variant="contained" onClick={handleAddItem}>Add Item</Button>
                    </div>
                    <br />
                    <Button variant="outlined" onClick={() => history.push(`/edit/${id}`)}>Edit</Button> <Button variant="outlined" onClick={() => history.push('/players')}>Player List</Button>
                </div>
                )
            })}
        </Container>
    )
}