import React from "react";

export default function InventoryItem({ item }) {
    return(
            <div>
                <p>Quantity: {item.quantity} Item: {item.item_name}</p>
            </div>
    )
}
