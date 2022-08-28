import React from 'react';

import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

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
                </TableRow>
            </TableHead>
            <TableBody>
                <GoodsListContent />
            </TableBody>
        </Table>
    );
};

export default GoodsList;
