import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../providers/CartContext';
import { List } from '@mui/material';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { redirect } from "react-router-dom";
import { Order } from '../interfaces/Order';
import { createOrder } from '../services/api';

export function ShoppingCartDrawer() {
    const { isCartOpen, cart, toggleCartOpen, clearCart } = useCart();

    const handlePlaceOrder = async () => {
        const order: Order = {
            id: 'order-1',
            dishSelections: cart,
            status: 'received',
        }

        const createdOrder = await createOrder(order)
        if (createdOrder) {
            toast(`Order has been placed`, { type: 'success', autoClose: 1000 });
            redirect('/order-details')
        }
    };

    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={toggleCartOpen}
            style={{
                width: '300px',
                minWidth: '300px',
            }}
        >
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 256 }}>
                    <Typography variant="h6">Order details</Typography>
                    <IconButton onClick={toggleCartOpen}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <List style={{ flex: 1, overflowY: 'auto' }}>
                    {cart.length === 0 ?
                        (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 300 }}>
                                <Typography variant='h6' color="text.secondary">Não há itens no carrinho</Typography>
                            </div>
                        )
                        :
                        (
                            cart.map((item, index) => (
                                <CartItem key={index} item={item} />
                            ))
                        )
                    }
                </List>

                <Button
                    variant="contained"
                    color="error" // Red color
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </Button>
                <Button
                    variant="outlined"
                    color="primary" // Red color
                    onClick={clearCart}
                    style={{ marginTop: '16px' }}
                >
                    Clear Cart
                </Button>
            </div>
        </Drawer>
    );
}
