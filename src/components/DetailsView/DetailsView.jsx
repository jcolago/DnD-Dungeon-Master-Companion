import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailViewItem from "../DetailViewItem/DetailViewItem";

export default function DetailsView() {
    const id = Number(useParams().id);
    const dispatch = useDispatch();
    const history = useHistory();

    const players = useSelector((store) => store.details)
  
    useEffect(() => {
        dispatch({ type: 'FETCH_PLAYER_DETAILS', payload: id });
    }, []);

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
                                <DetailViewItem key={item.id} item={item} />
                            </ul>
                        )
                    })}
                    <button>Edit</button>
                    <button onClick={() => history.push('/players')}>Player List</button>
                </div>
                )
            })}
        </div>
    )
}