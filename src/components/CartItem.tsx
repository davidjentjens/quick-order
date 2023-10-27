import React from 'react';
import Button from '@mui/material/Button';
import { CardMedia, ListItem, ListItemText } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

import { DishSelection } from "../interfaces/Order";
import { useCart } from "../providers/CartContext";

interface CartItemProps {
    key: React.Key;
    item: DishSelection;
}

export default function CartItem({ key, item }: CartItemProps) {
    const { dispatch } = useCart();

    const increaseQuantity = (item: DishSelection) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: item });
    };

    const decreaseQuantity = (item: DishSelection) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: item });
    };

    const removeItem = (item: DishSelection) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    return (
        <ListItem key={key}>
            <CardMedia
                component="img"
                src={item.dish?.imageUrl}
                alt={item.dish?.name}
                style={{ width: '100px', height: '100px', marginRight: '16px', borderRadius: '8px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                    <ListItemText
                        primary={`${item.dish?.name}`}
                        secondary={`Quantity: ${item.quantity}`}
                    />
                    <ButtonGroup size="small" aria-label="small outlined button group" style={{ height: '32px' }} >
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => decreaseQuantity(item)}
                        >
                            -
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => increaseQuantity(item)}
                        >
                            +
                        </Button>
                    </ButtonGroup>
                </div>
                <Button
                    variant="outlined"
                    color="error" // Red color
                    onClick={() => removeItem(item)}
                >
                    Remove from Cart
                </Button>
            </div>
        </ListItem >
    )
}