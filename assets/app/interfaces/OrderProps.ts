import { GoodsProps } from './GoodsProps';

export interface OrderProps {
    id: number;
    created: string;
    items: OrderItemProps[];
}

export interface OrderItemProps {
    id: number;
    goods: GoodsProps;
    quantity: number;
    price: number;
}
