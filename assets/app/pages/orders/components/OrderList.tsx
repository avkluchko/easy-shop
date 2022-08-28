import React from 'react';

import Typography from '@mui/material/Typography';

import { useOrdersContext } from '../OrdersContext';
import OrderContent from './OrderContent';

const OrderList = () => {
    const { orders, isLoading } = useOrdersContext();

    if (isLoading) {
        return (
            <Typography>Загрузка...</Typography>
        )
    }

    if (!orders || orders.length === 0) {
        return (
            <Typography>Заказов нет.</Typography>
        )
    }

    return (
        <React.Fragment>
            {orders.map(item => (
                <OrderContent
                    key={`order_${item.id}`}
                    order={item}
                />
            ))}
        </React.Fragment>
    );
};

export default OrderList;
