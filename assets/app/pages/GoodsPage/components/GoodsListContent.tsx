import React from 'react';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { useGoodsContext } from '../GoodsContext';
import CartAction from './CartAction';

const GoodsListContent = () => {
    const { goods, isLoading } = useGoodsContext();

    if (isLoading) {
        return (
            <TableRow>
                <TableCell colSpan={6}>
                    Загрузка...
                </TableCell>
            </TableRow>
        )
    }

    if (!goods || goods.length === 0) {
        return (
            <TableRow>
                <TableCell colSpan={6}>
                    Товаров нет.
                </TableCell>
            </TableRow>
        )
    }

    return (
        <React.Fragment>
            {goods.map(item => (
                <TableRow key={`goods_${item.id}`}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.catalog.name}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="center">{item.measure.name}</TableCell>
                    <TableCell align="right">{item.regprice}</TableCell>
                    <TableCell>
                        <CartAction goods={item} />
                    </TableCell>
                </TableRow>
            ))}
        </React.Fragment>
    );
};

export default GoodsListContent;
