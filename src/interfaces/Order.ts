import { Dish } from "./Dish";

type Status = 'received' | 'preparing' | 'ready-to-serve';

export interface DishSelection {
    id: string;
    quantity: number;
    dish: Dish
}
export interface Order {
    id: string;
    status: Status;
    dishSelections: DishSelection[];
    total: number;
}