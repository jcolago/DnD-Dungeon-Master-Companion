//Imports used for component
import { Typography } from "@mui/material";
import React from "react";

//Function that renders item, takes in the passed item prop and displays its information
export default function InventoryItem({ item }) {
    return(
            <div>
                <Typography>Quantity: {item.quantity} Item: {item.item_name}</Typography>
            </div>
    )
}
