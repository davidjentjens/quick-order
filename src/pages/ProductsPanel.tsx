import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Dish } from '../interfaces/Dish';
import { fetchDishes, removeDish } from '../services/api';
import { toast } from 'react-toastify';

export default function ProductsPanel() {

  const [dishes, setDishes] = useState<Dish[]>();

  const handleEditDish = (dishId: string) => {
    // Implemente a lógica para editar o pedido com o ID fornecido
    // Por exemplo, redirecionar para a página de edição do pedido
    console.log(`Editar pedido com ID ${dishId}`);
  };

  const handleRemoveDish = async (dishId: string) => {
    try {
      removeDish(dishId);
      setDishes(dishes?.filter(dish => dish.id !== dishId));
      toast(`Dish ${dishId} has been removed`, { type: 'success', autoClose: 1000 })
    } catch {
      toast(`Dish ${dishId} could not be removed`, { type: 'error', autoClose: 1000 })
    }
  };

  useEffect(() => {
    const getDishes = async () => {
      const dishes = await fetchDishes();
      setDishes(dishes);
    }

    getDishes();
  }, []);

  const formatPrice = (price: number) => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2, marginLeft: 2 }}>
        Products
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
        {dishes?.map((dish) => (
          <Box key={dish.id} sx={{ border: 1, borderColor: 'divider', padding: 2, marginBottom: 2, marginLeft: 2 }}>
            <Typography variant="body1">Product ID: {dish.id}</Typography>
            <Typography variant="body1">Name: {dish.name}</Typography>
            <Typography variant="body1">Price: {formatPrice(dish.price)}</Typography>
            <Button disabled onClick={() => handleEditDish(dish.id)}>Edit (BETA)</Button>
            <Button onClick={() => handleRemoveDish(dish.id)}>Remove</Button>
          </Box>
        ))}
      </Box>
    </div>
  );
}
