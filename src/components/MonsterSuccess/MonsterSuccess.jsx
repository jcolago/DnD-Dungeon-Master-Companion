import React from "react";
import { useHistory } from "react-router-dom";

export default function MonsterSuccess() {
        const history = useHistory();
        return(
            <div>
                <h2>Monster successfully entered!</h2>
                <button onClick={() => history.push("/monsterentry")}>Enter New Monster</button>  <button onClick={() => history.push("/monsters")}>Monster List</button>
            </div>
        )
    }
