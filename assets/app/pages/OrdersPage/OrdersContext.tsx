import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { OrderProps } from '../../interfaces/OrderProps';
import { fetchOrders } from './api';

interface ContextState {
    page: number;
    orders: OrderProps[],
    totalItems: number;
    isLoading: boolean;
}

const OrdersContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const OrdersContextProvider: React.FC<Props> = (props) => {
    const [orders, setOrders] = useState<OrderProps[]>([]);

    const [page, setPage] = useState(1);

    const [totalItems, setTotalItems] = useState(0);

    const { data, isLoading } = useQuery([page], () => fetchOrders(page));

    useEffect(() => {
        let mounted = true;

        if (!data) {
            return;
        }

        if (mounted) {
            setTotalItems(data.totalItems);
            setOrders(data.items);
        }

        return () => {
            mounted = false
        };
    }, [data]);

    return (
        <OrdersContext.Provider
            value={{
                page,
                orders,
                totalItems,
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
