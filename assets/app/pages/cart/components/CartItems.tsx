import React from 'react';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Table from '@mui/material/Table';

import { useCartContext } from '../CartContext';
import CartItemAction from './CartItemAction';

const CartItems = () => {
    const { items, totalSum } = useCartContext();

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Наименование</TableCell>
                    <TableCell align="right">Количество</TableCell>
                    <TableCell align="center">Ед.изм.</TableCell>
                    <TableCell align="right">Цена за единицу</TableCell>
                    <TableCell align="right">Цена</TableCell>
                    <TableCell/>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item, index) => (
                    <TableRow key={`goods_${item.id}`}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{item.goods.name}</TableCell>
                        <TableCell align="right">{item.quantity}</TableCell>
                        <TableCell align="center">{item.goods.measure.name}</TableCell>
                        <TableCell align="right">{item.goods.regprice}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell>
                            <CartItemAction item={item} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={6} align="right">Итого: {totalSum}</TableCell>
                    <TableCell/>
                </TableRow>
            </TableHead>
        </Table>
    );
};

export default CartItems;
