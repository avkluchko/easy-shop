import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItemProps } from '../../interfaces/CartProps';
import { GoodsProps } from '../../interfaces/GoodsProps';
import useLocalStorage from '../../hooks/useLocalStorage';
import { round2dec } from '../../utils/math';

interface ContextState {
    items: CartItemProps[];
    totalItems: number;
    totalSum: number;
    addItem: (item: GoodsProps) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
}

const CartContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const CartContextProvider: React.FC<Props> = (props) => {
    const [storedItems, setStoredItems] = useLocalStorage<CartItemProps[]>('cart', []);

    const [items, setItems] = useState<CartItemProps[]>(storedItems);

    useEffect(() => {
        setStoredItems(items);
    }, [items]);

    const totalItems = useMemo(() => {
        return items.reduce((total, item) => total + item.quantity, 0);
    }, [items]);

    const totalSum = useMemo(() => {
        return round2dec(items.reduce((total, item) =>
            total + (item.quantity * item.goods.regprice), 0));

    }, [items]);

    const addItem = (goods: GoodsProps) => {
        const previouslyAdded = items.find(item => item.id === goods.id);
        if (previouslyAdded) {
            setItems(prevItems => prevItems.map(item => item.id !== goods.id ? item : ({
                ...item,
                quantity: item.quantity + 1,
                price: round2dec((item.quantity + 1) * goods.regprice)
            })));
        } else {
            setItems(prevItems => ([...prevItems, {
                id: goods.id,
                goods,
                quantity: 1,
                price: goods.regprice
            }]))
        }
    }

    const removeItem = (id: number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    }

    const clearCart = () => {
        setItems([]);
    }

    return (
        <CartContext.Provider
            value={{
                items,
                totalItems,
                totalSum,
                addItem,
                removeItem,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
