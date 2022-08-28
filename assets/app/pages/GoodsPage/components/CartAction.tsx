import React from 'react';

import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { GoodsProps } from '../../../interfaces/GoodsProps';
import { useCartContext } from '../../CartPage/CartContext';

type Props = {
    goods: GoodsProps;
};

const CartAction = ({ goods }: Props) => {
    const { addItem } = useCartContext();

    return (
        <React.Fragment>
            <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => addItem(goods)}
            >
                <AddShoppingCartIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
};

export default CartAction;
