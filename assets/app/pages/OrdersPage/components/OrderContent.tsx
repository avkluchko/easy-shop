import React from 'react';

import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';

import { OrderProps } from '../../../interfaces/OrderProps';
import Title from '../../../components/Title';

type Props = {
    order: OrderProps;
}

const OrderContent = ({ order }: Props) => {
    const date = new Date(order.created).toLocaleDateString();

    return (
        <Paper sx={{ mb: 3, p: 2, display: 'flex', flexDirection: 'column' }}>
            <Title>
                Заказ №{order.id} от {date}
            </Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Наименование</TableCell>
                        <TableCell align="right">Количество</TableCell>
                        <TableCell align="right">Цена за единицу</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {order.items.map((item, index) => (
                        <TableRow key={`goods_${item.id}`}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{item.goods.name}</TableCell>
                            <TableCell align="center">{item.quantity} {item.goods.measure.name}</TableCell>
                            <TableCell align="right">{item.goods.regprice}</TableCell>
                            <TableCell align="right">{item.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={4} align="right">Сумма</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
            </Table>
        </Paper>
    );
};

export default OrderContent;
