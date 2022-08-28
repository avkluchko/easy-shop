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
    const { items, addItem } = useCartContext();

    const handleAddCart = () => addItem(goods);

    const inCartQuantity = React.useMemo(() => {
        const inCartItem = items.find(item => item.id === goods.id);
        return inCartItem ? inCartItem.quantity : 0;
    }, [items]);

    const canAddToCart = React.useMemo(() => {
        return inCartQuantity < goods.quantity;
    }, [inCartQuantity]);

    return (
        <React.Fragment>
            <IconButton
                color="primary"
                aria-label="add to shopping cart"
                title="Добавить в корзину"
                onClick={handleAddCart}
                disabled={!canAddToCart}
            >
                <AddShoppingCartIcon fontSize="small"/>
            </IconButton>
            {inCartQuantity > 0 && inCartQuantity}
        </React.Fragment>
    );
};

export default CartAction;
