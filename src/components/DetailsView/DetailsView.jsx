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
        <Container style={{ border: "2px double black", width: "80%", backgroundColor: "rgb(128, 150, 191, .5)", display:"flex", flexDirection: "column", padding: "10px"}}>
            {players.map(player => {
                return (
                <div>
                    <Card key={player.id} style={{ margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)", columnCount: "3", padding: "5px"}}>
                        <img style={{width: "197px", height: "255px"}} src={player.character_img} />
                    
                        <Typography>Player Name: {player.player_name}</Typography>
                        <Typography>Character Name: {player.character_name}</Typography>
                        <Typography>Character Class: {player.character_class}</Typography>
                        <Typography>Character Level: {player.character_level}</Typography>
                        <Typography>Current Hit Points: {player.current_hp}</Typography>
                        <Typography>Total Hit Points: {player.total_hp}</Typography>
                        <Typography>Armor Class: {player.armor_class}</Typography>
                        <Typography>Speed: {player.speed}</Typography>
                        <Typography>Initiative Bonus: {player.initiative_bonus}</Typography>
                        <br />
                        <Typography style={{marginTop: "5px" }} variant="body1">Strength: {player.strength} Bonus: {player.str_bonus}  Save: {player.str_save}</Typography>
                        <Typography variant="body1" style={{marginTop: "5px"}}>Dexterity: {player.dexterity} Bonus: {player.dex_bonus}  Save: {player.dex_save}</Typography>
                        <Typography variant="body1" style={{marginTop: "5px"}}>Constitution: {player.constitution} Bonus: {player.con_bonus}  Save: {player.con_save}</Typography>
                        <Typography variant="body1" style={{marginTop: "5px"}}>Intelligence: {player.intelligence} Bonus: {player.int_bonus}  Save: {player.int_save}</Typography>
                        <Typography style={{marginTop: "5px"}}>Wisdom: {player.wisdom} Bonus: {player.wis_bonus}  Save: {player.wis_save}</Typography>
                        <Typography style={{marginTop: "5px"}}>Charisma: {player.charisma} Bonus: {player.cha_bonus}  Save: {player.cha_save}</Typography>
                    </Card>
                    <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)", columnCount: "3", padding: "5px"}}>
                    {player.quantity_items.map(item => {

                        return (
                            <ul>
                                <InventoryItem key={item.id} item={item} />
                            </ul>
                        )
                    })}
                    </Card>
                   
                    <Card style={{margin: "5px", backgroundColor: "rgb(226, 232, 243, .7)", padding: "5px"}}>
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
                    <Button variant="contained" onClick={() => history.push(`/edit/${id}`)}>Edit</Button> <Button variant="contained" onClick={() => history.push('/players')}>Player List</Button>
                    </Card>
                </div>
                )
            })}
        </Container>
    )
}