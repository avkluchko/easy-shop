import { PaginatedResponseProps } from '../../interfaces/Pagination';
import { OrderProps } from '../../interfaces/OrderProps';
import { CartItemProps } from '../../interfaces/CartProps';

const fetchUrl = '/api/orders';

export const fetchOrders = async (page: number): Promise<PaginatedResponseProps<OrderProps>> => {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return {
        totalItems: data['hydra:totalItems'],
        items: data['hydra:member'],
    };
};

export const processOrder = async (items: CartItemProps[]) => {
    const body = {
        items: items.map(item => ({
            goods: `/api/goods/${item.goods.id}`,
            quantity: item.quantity,
            price: item.price,
        }))
    };

    const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/ld+json;charset=utf-8'
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();
};
