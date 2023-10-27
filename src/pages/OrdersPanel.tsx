import { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Order } from '../interfaces/Order';
import { fetchOrders, removeOrder } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function OrdersPanel() {
  const [orders, setOrders] = useState<Order[]>();

  const navigate = useNavigate();

  const handleOpenOrder = (orderId: string) => {
    navigate(`/order-details/${orderId}`);
  };

  const handleEditOrder = (orderId: string) => {
    // Implemente a lógica para editar o pedido com o ID fornecido
    // Por exemplo, redirecionar para a página de edição do pedido
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleRemoveOrder = async (orderId: string) => {
    try {
      removeOrder(orderId);
      setOrders(orders?.filter(order => order.id !== orderId));
      toast(`Order ${orderId} has been removed`, { type: 'success', autoClose: 1000 })
    } catch {
      toast(`Order ${orderId} could not be removed`, { type: 'error', autoClose: 1000 })
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      const orders: Order[] = await fetchOrders();
      setOrders(orders);
    }

    getOrders();
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 2 }}>
        Orders
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {orders?.map((order) => (
          <Box key={order.id} sx={{ border: 1, borderColor: 'divider', padding: 2, marginBottom: 2, marginLeft: 2 }}>
            <Typography variant="body1">Order ID: {order.id}</Typography>
            <Typography variant="body1">Total: ${formatPrice(order.total)}</Typography>
            <Typography variant="body1">Status: {order.status}</Typography>
            <Button onClick={() => handleOpenOrder(order.id)}>Open</Button>
            <Button disabled onClick={() => handleEditOrder(order.id)}>Edit (BETA)</Button>
            <Button onClick={() => handleRemoveOrder(order.id)}>Remove</Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
