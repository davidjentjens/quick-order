import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useCart } from '../providers/CartContext';
import { List } from '@mui/material';
import CartItem from './CartItem';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Order } from '../interfaces/Order';
import { createOrder } from '../services/api';
import { useMemo } from 'react';

export function ShoppingCartDrawer() {
    const { isCartOpen, cart, toggleCartOpen, clearCart } = useCart();
    const navigate = useNavigate();
    const handlePlaceOrder = async () => {
        const order: Order = {
            id: 'order-1',
            dishSelections: cart,
            status: 'received',
            total: cart.reduce((total, item) => total + item.dish.price * item.quantity, 0)
        }

        const createdOrder = await createOrder(order)

        console.log("CREATED", createdOrder);

        if (createdOrder) {
            toast(`Order has been placed`, { type: 'success', autoClose: 1000 });

            // Redirecione o usuário para a página 'order-details' com o 'id' da ordem como parte do URL
            navigate(`/order-details/${createdOrder.id}`);
        }
    };

    const totalPrice = useMemo(() =>
        cart.reduce((total, item) => total + item.dish.price * item.quantity, 0)
        , [cart])

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(totalPrice);

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
                    disabled={totalPrice === 0}
                >
                    {`TOTAL: ${formattedPrice} - Place Order`}
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
