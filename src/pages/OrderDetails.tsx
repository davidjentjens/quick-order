import React, { useEffect, useState } from 'react';
import { Paper, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import { Order } from '../interfaces/Order';
import { getOrder } from '../services/api';

export default function OrderDetails() {
    const [order, setOrder] = useState<Order>();

    useEffect(() => {
        const fetchOrder = async () => {
            const order = await getOrder('order-1');
            setOrder(order);
        }

        fetchOrder();
    }, []);

    if (!order) {
        return <div>Loading...</div>
    }

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

                    <List>
                        {order.dishSelections.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText
                                    primary={item.dish.name}
                                    secondary={`Price: $${item.dish.price} Quantity: ${item.quantity}`}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="h6" gutterBottom>
                        Total: ${order.total}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}