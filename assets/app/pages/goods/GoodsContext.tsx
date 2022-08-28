import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { Goods } from '../../interfaces/goods';
import { fetchGoods } from './api';
import { PaginatedResponseProps } from '../../interfaces/pagination';

interface ContextState {
    category?: string;
    changeCategory: (category: string) => void;
    page: number;
    goods: Goods[],
    totalItems: number;
    isLoading: boolean;
}

const GoodsContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const GoodsContextProvider: React.FC<Props> = (props) => {
    const [goods, setGoods] = useState<Goods[]>([]);

    const [category, setCategory] = useState<string | undefined>();

    const [page, setPage] = useState(1);

    const [totalItems, setTotalItems] = useState(0);

    const { data, isLoading } = useQuery<PaginatedResponseProps<Goods>>(
        [category, page],
        () => fetchGoods(category, page)
    );

    useEffect(() => {
        let mounted = true;

        if (!data) {
            return;
        }

        if (mounted) {
            setTotalItems(data.totalItems);
            setGoods(data.items);
        }

        return () => {
            mounted = false
        };
    }, [data]);

    return (
        <GoodsContext.Provider
            value={{
                category,
                changeCategory: setCategory,
                page,
                goods,
                totalItems,
                isLoading,
            }}
        >
            {props.children}
        </GoodsContext.Provider>
    );
};

export const useGoodsContext = () => {
    return useContext(GoodsContext);
};
