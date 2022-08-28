import { Goods } from './goods';

export interface CartItemProps {
    id: number;
    goods: Goods;
    quantity: number;
    price: number;
}
