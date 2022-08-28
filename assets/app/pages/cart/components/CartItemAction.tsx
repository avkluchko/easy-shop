import React from 'react';

import IconButton from '@mui/material/IconButton';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { CartItemProps } from '../../../interfaces/cart';
import { useCartContext } from '../CartContext';

type Props = {
    item: CartItemProps;
};

const CartItemAction = ({ item }: Props) => {
    const { removeItem } = useCartContext();

    const handleRemove = () => removeItem(item.id);

    return (
        <React.Fragment>
            <IconButton
                color="primary"
                aria-label="remove item from shopping cart"
                title="Удалить товар из корзины"
                onClick={handleRemove}
            >
                <RemoveShoppingCartIcon color="error" fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );
};

export default CartItemAction;
