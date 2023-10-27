import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Dish } from '../interfaces/Dish';
import MenuHeader from '../components/MenuHeader';
import { fetchDishes } from '../services/api';
import { OrderDrawer } from '../components/OrderDrawer';
import { DishList } from '../components/DishList';

export default function Home() {
    const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
        async function loadDishes() {
            try {
                const data = await fetchDishes();
                setDishes(data);
            } catch (error) {
                toast(`Error fetching menu items: ${error}`);
                console.error('Error fetching menu items:', error);
            }
        }

        loadDishes();
    }, []);

    return (
        <div>
            <OrderDrawer />
            <MenuHeader />
            <DishList dishes={dishes} />
        </div>
    );
}
