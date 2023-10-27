import { Dish } from "./Dish";

type Status = 'received' | 'preparing' | 'ready-to-serve';

export interface DishSelection {
    id: number;
    quantity: number;
    dish: Dish
}

export interface Order {
    id: number;
    status: Status;
    dishSelections: DishSelection[];
}