import { useEffect, useState } from 'react';
import { Dish } from '../interfaces/Dish';
import { fetchDishes } from '../services/api';
import { ShoppingCartDrawer } from '../components/ShoppingCartDrawer';
import { DishList } from '../components/DishList';
import MenuHeader from '../components/MenuHeader';

export default function Home() {
    const [dishes, setDishes] = useState<Dish[]>([]);

    useEffect(() => {
        async function loadDishes() {
            const data = await fetchDishes();
            if (data) {
                setDishes(data);
            }
        }

        loadDishes();
    }, []);

    return (
        <>
            <MenuHeader />
            <DishList dishes={dishes} />
            <ShoppingCartDrawer />
        </>
    );
}
