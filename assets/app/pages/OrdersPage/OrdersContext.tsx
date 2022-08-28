import React, { createContext, useContext, useState } from 'react';
import { useQuery } from 'react-query';

import { OrderProps } from '../../interfaces/OrderProps';

interface ContextState {
    orders: OrderProps[],
    isLoading: boolean;
}

const OrdersContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const OrdersContextProvider: React.FC<Props> = (props) => {
    const [orders, setOrders] = useState<OrderProps[]>([]);

    const { data, isLoading } = useQuery([], () => {
        try {
            return [];
        } catch (e) {
            console.error(e);
            return [];
        }
    });

    return (
        <OrdersContext.Provider
            value={{
                orders,
                isLoading,
            }}
        >
            {props.children}
        </OrdersContext.Provider>
    );
};

export const useOrdersContext = () => {
    return useContext(OrdersContext);
};
