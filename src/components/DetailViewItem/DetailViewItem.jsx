import React from "react";

export default function DetailViewItem({ item }) {
    return(
        <li>Quantity: {item.quantity}  Item: {item.item_name}</li>
    )
}