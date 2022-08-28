import React from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import GoodsListContent from './GoodsListContent';

const GoodsList = () => {
    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Артикул</TableCell>
                    <TableCell>Категория</TableCell>
                    <TableCell>Наименование</TableCell>
                    <TableCell align="right">Остаток</TableCell>
                    <TableCell align="center">Ед.изм</TableCell>
                    <TableCell align="right">Цена</TableCell>
                    <TableCell align="center">
                        <ShoppingCartIcon color="inherit" fontSize="small" />
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <GoodsListContent />
            </TableBody>
        </Table>
    );
};

export default GoodsList;
