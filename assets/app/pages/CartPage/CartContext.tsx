import React, { createContext, useContext, useMemo, useState } from 'react';
import { CartItemProps } from '../../interfaces/CartProps';
import { GoodsProps } from '../../interfaces/GoodsProps';

interface ContextState {
    totalItems: number;
    items: CartItemProps[];
    addItem: (item: GoodsProps) => void;
}

const CartContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const CartContextProvider: React.FC<Props> = (props) => {
    const [items, setItems] = useState<CartItemProps[]>([]);

    const totalItems = useMemo(() => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }, [items]);

    const addItem = (goods: GoodsProps) => {
        const previouslyAdded = items.find(item => item.goods.id === goods.id);
        if (previouslyAdded) {
            setItems(prevItems => prevItems.map(item => item.goods.id !== goods.id ? item : ({
                ...item,
                quantity: item.quantity + 1
            })));
        } else {
            setItems(prevItems => ([...prevItems, { goods, quantity: 1 }]))
        }
    }

    return (
        <CartContext.Provider
            value={{
                totalItems,
                items,
                addItem,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
