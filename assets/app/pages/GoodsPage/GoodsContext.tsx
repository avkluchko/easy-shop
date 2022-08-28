import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { GoodsProps } from '../../interfaces/GoodsProps';
import { fetchGoods } from './api';
import { PaginatedResponseProps } from '../../interfaces/Pagination';

interface ContextState {
    category: number | null;
    page: number;
    goods: GoodsProps[],
    totalItems: number;
    isLoading: boolean;
}

const GoodsContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const GoodsContextProvider: React.FC<Props> = (props) => {
    const [goods, setGoods] = useState<GoodsProps[]>([]);

    const [category, setCategory] = useState<number | null>(null);

    const [page, setPage] = useState(1);

    const [totalItems, setTotalItems] = useState(0);

    const { data, isLoading } = useQuery<PaginatedResponseProps<GoodsProps>>(
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
