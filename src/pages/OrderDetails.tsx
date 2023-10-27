import { useEffect, useState } from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import { Order } from '../interfaces/Order';
import { getOrder } from '../services/api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OrderDetails() {
    const { id } = useParams();

    const [order, setOrder] = useState<Order>();

    useEffect(() => {
        if (!id) {
            toast('Order not found', { type: 'error', autoClose: 1000 })
            return;
        }

        const fetchOrder = async () => {
            const order: Order = await getOrder(id);
            setOrder(order);
        }

        fetchOrder();
    }, [id]);

    if (!order) {
        return <div>Loading...</div>
    }

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(order.total);

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        Order Details
                    </Typography>

                    <Typography variant="subtitle1">
                        Order Number: {order.id}
                    </Typography>

                    <Typography variant="subtitle1">
                        Order Status: {order.status}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Total: {formattedPrice}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}