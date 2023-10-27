import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

// Mock de dados (substitua pelo seu mock ou dados reais)
const mockOrders = [
  { id: 1, customer: 'Customer 1', total: 50.0, status: 'Pending' },
  { id: 2, customer: 'Customer 2', total: 35.0, status: 'Delivered' },
  { id: 3, customer: 'Customer 3', total: 70.0, status: 'Processing' },
];

export default function OrdersPanel() {
  const [orders] = useState(mockOrders);

  const handleEditOrder = (orderId: number) => {
    // Implemente a lógica para editar o pedido com o ID fornecido
    // Por exemplo, redirecionar para a página de edição do pedido
    console.log(`Editar pedido com ID ${orderId}`);
  };

  const handleRemoveOrder = (orderId: number) => {
    // Implemente a lógica para remover o pedido com o ID fornecido
    // Por exemplo, exibir um modal de confirmação e, em seguida, fazer a remoção
    console.log(`Remover pedido com ID ${orderId}`);
  };

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 2}}>
        Orders
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {orders.map((order) => (
          <Box key={order.id} sx={{ border: 1, borderColor: 'divider', padding: 2, marginBottom: 2 , marginLeft: 2}}>
            {/* Exiba os detalhes de cada pedido, como ID, cliente, total, status, etc. */}
            <Typography variant="body1">Order ID: {order.id}</Typography>
            <Typography variant="body1">Customer: {order.customer}</Typography>
            <Typography variant="body1">Total: ${order.total}</Typography>
            <Typography variant="body1">Status: {order.status}</Typography>
            {/* Adicione mais informações do pedido conforme necessário */}
            <Button onClick={() => handleEditOrder(order.id)}>Edit</Button>
            <Button onClick={() => handleRemoveOrder(order.id)}>Remove</Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
