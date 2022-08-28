import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useOrdersContext } from '../OrdersContext';

const OrderListContent = () => {
    const { orders, isLoading } = useOrdersContext();

    if (isLoading) {
        return (
            <TableRow>
                <TableCell colSpan={5}>
                    Загрузка...
                </TableCell>
            </TableRow>
        )
    }

    if (orders.length === 0) {
        return (
            <TableRow>
                <TableCell colSpan={5}>
                    Заказов нет.
                </TableCell>
            </TableRow>
        )
    }

    return (
        <div>

        </div>
    );
};

export default OrderListContent;
