import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import DetailViewItem from "../DetailViewItem/DetailViewItem";

export default function DetailsView() {
    const id = useParams().id;
    const dispatch = useDispatch();
    const history = useHistory();

    const player = useSelector((store) => store.detials)

    useEffect(() => {
        dispatch({ type: 'SET_PLAYER_DETAILS', payload: id })
    }, [])

    return (
        <div>
            {player.map(player => {
                <div>
                    <div>
                        <img src={player.img} />
                    </div>
                    <div>
                        <p>Player Name: {player.name}</p>
                        <p>Character Name: {player.character_name}</p>
                        <p>Character Image: {player.character_img}</p>
                        <p>Character Lever: {player.character_level}</p>
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
                        <ul>
                            <DetailViewItem key={item.id} item={item} />
                        </ul>
                    })}
                </div>
            })}
        </div>
    )
}