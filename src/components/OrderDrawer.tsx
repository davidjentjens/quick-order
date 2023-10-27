import React from 'react';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../providers/CartContext';

export function OrderDrawer() {
    const { isCartOpen, cart, toggleCartOpen } = useCart();

    const handlePlaceOrder = () => {
        // Implement your place order logic here
        // You can call addToCart function or any other logic to place the order
    };

    return (
        <Drawer anchor="right" open={isCartOpen}>
            <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h5">Order details</Typography>
                    <IconButton onClick={toggleCartOpen}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.dish?.name}: {item.quantity}
                        </li>
                    ))}
                </ul>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </Button>
            </div>
        </Drawer>
    );
}
