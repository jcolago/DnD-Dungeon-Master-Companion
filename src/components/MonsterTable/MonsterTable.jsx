import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MonsterTableItem from "../MonsterTableItem/MonsterTableItem";


export default function MonstersTable() {
    const dispatch = useDispatch();
    const monsters = useSelector((store) => store.monsters)
    console.log(monsters);

    useEffect(() => {
        dispatch({ type: "FETCH_MONSTERS" });
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Monster Name</th>
                    <th>Size</th>
                    <th>Hit Points</th>
                    <th>Game Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {monsters.map(monster => {
                    return (
                        <MonsterTableItem key={monster.id} monster={monster} />
                    )
                })}
            </tbody>
        </table>
    )
}
