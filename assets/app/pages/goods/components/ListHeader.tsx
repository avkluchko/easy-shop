import React from 'react';

import Box from '@mui/material/Box';

import Title from '../../../components/Title';
import { useGoodsContext } from '../GoodsContext';
import CatalogSelect from './CatalogSelect';

const ListHeader = () => {
    const { totalItems } = useGoodsContext();

    return (
        <Box sx={{ display: 'flex' }}>
            <Title>Каталог товаров {totalItems !== undefined && `(всего: ${totalItems})`}</Title>
            <Box sx={{ flexGrow: 1 }}/>
            <CatalogSelect />
        </Box>
    );
};

export default ListHeader;
