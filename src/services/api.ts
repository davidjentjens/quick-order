// api.js
import axios from 'axios';
import { Dish } from '../interfaces/Dish';
import { Order } from '../interfaces/Order';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: 'https://quickorderapi.azurewebsites.net/api/v1',
});

export const getOrder = async (id: string) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  } catch (error) {
    toast('Error while getting order', { type: 'error' })
    console.error(error);
  }
};

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
      const response = await api.get('/dishes');
      return response.data;
    } catch (error) {
      toast('Error while fetching dishes', { type: 'error' })
      console.error(error);
    }
  };
