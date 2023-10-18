import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function PlayerStatInfo() {
const dispatch = useDispatch();
const playerInfo = useSelector((store) => store.players)
console.log(playerInfo)
let [newPlayerInfo, setNewPlayerInfo] = useState({ ...playerInfo, strength: "", str_bonus: "", str_save: "", dexterity: "", dex_bonus: "", dex_save: "", constitution: "", con_bonus: "", con_save: "", intelligence: "", int_bonus: "", int_save: "", wisdom: "", wis_bonus: "", wis_save: "", charisma: "", cha_bonus: "", cha_save: ""})

return(
    <div>
    <div>
        <h2>Enter Character Stats Below!</h2>
    </div>
    <br/>
    <form>
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    <input type="number" placeholder="" value={newPlayerInfo.} onChange={} />
    </form>
    </div>
)
}