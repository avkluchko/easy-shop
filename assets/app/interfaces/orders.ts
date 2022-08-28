import { Goods } from './goods';

export interface Orders {
    id: number;
    created: string;
    items: OrderItemProps[];
    sum: number;
}

export interface OrderItemProps {
    id: number;
    goods: Goods;
    quantity: number;
    price: number;
    sum: number;
}
