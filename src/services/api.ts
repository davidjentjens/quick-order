// api.js
import axios from 'axios';
import { Dish } from '../interfaces/Dish';
import { Order } from '../interfaces/Order';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'http://localhost:3004',
});

export const createOrder = async (orderData: Order) => {
  try {
    const response = await api.post('/orders', orderData);
    return response.data;
  } catch (error) {
    toast('Error while creating order', { type: 'error' })
    console.error(error);
  }
};

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    toast('Error while fetching order', { type: 'error' })
    console.error(error);
  }
};

export const fetchDishes = async (): Promise<Dish[] | undefined> => {
    try {
      const response = await api.get('/menu');
      return response.data;
    } catch (error) {
      toast('Error while fetching dishes', { type: 'error' })
      console.error(error);
    }
  };
