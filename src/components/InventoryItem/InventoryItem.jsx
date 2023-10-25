import { Typography } from "@mui/material";
import React from "react";


export default function InventoryItem({ item }) {
    return(
            <div>
                <Typography>Quantity: {item.quantity} Item: {item.item_name}</Typography>
            </div>
    )
}
