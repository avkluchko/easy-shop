import { GoodsProps } from './GoodsProps';

export interface CartItemProps {
    id: number;
    goods: GoodsProps;
    quantity: number;
    price: number;
}
