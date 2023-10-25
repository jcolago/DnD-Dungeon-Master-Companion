import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
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
        <div>
            {players.map(player => {
                return (<div key={player.id}>
                    <div>
                        <img src={player.character_img} />
                    </div>
                    <div>
                        <p>Player Name: {player.player_name}</p>
                        <p>Character Name: {player.character_name}</p>
                        <p>Character Class: {player.character_class}</p>
                        <p>Character Level: {player.character_level}</p>
                        <p>Current Hit Points: {player.current_hp}</p>
                        <p>Total Hit Points: {player.total_hp}</p>
                        <p>Armor Class: {player.armor_class}</p>
                        <p>Speed: {player.speed}</p>
                        <p>Initiative Bonus: {player.initiative_bonus}</p>
                    </div>
                    <div>
                        <p>Strength: {player.strength} Bonus: {player.str_bonus}  Save: {player.str_save}</p>
                        <p>Dexterity: {player.dexterity} Bonus: {player.dex_bonus}  Save: {player.dex_save}</p>
                        <p>Constitution: {player.constitution} Bonus: {player.con_bonus}  Save: {player.con_save}</p>
                        <p>Intelligence: {player.intelligence} Bonus: {player.int_bonus}  Save: {player.int_save}</p>
                        <p>Wisdom: {player.wisdom} Bonus: {player.wis_bonus}  Save: {player.wis_save}</p>
                        <p>Charisma: {player.charisma} Bonus: {player.cha_bonus}  Save: {player.cha_save}</p>
                    </div>
                    {player.quantity_items.map(item => {

                        return (
                            <ul>
                                <InventoryItem key={item.id} item={item} />
                            </ul>
                        )
                    })}

                    <div>
                        <h2>Select Inventory</h2>
                    </div>
                    <br />
                    <label>Choose Items and quantity</label>
                    <input onChange={(event) => setItemQuantity(event.target.value)} type="number" placeholder="Quantity" value={itemQuantity} />
                    <select onChange={(event) => setItemId(event.target.value)} value={itemId} name="items" id="items">
                        <option value="" disabled>Please select an item</option>
                        {inventory.map(item => {
                            return (<option value={item.id} key={item.id} >{item.item_name}</option>
                            )
                        })}
                    </select>
                    <button onClick={handleAddItem}>Add Item</button>
                    <br />
                    <button onClick={() => history.push(`/edit/${id}`)}>Edit</button>
                    <button onClick={() => history.push('/players')}>Player List</button>
                </div>
                )
            })}
        </div>
    )
}