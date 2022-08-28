import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { GoodsProps } from '../../interfaces/GoodsProps';
import { fetchGoods } from './api';
import { PaginatedResponseProps } from '../../interfaces/Pagination';

interface ContextState {
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

    const [totalItems, setTotalItems] = useState(0);

    const { data, isLoading, isRefetching } = useQuery<PaginatedResponseProps<GoodsProps>>([], fetchGoods);

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
                goods,
                totalItems,
                isLoading: isLoading || isRefetching,
            }}
        >
            {props.children}
        </GoodsContext.Provider>
    );
};

export const useGoodsContext = () => {
    return useContext(GoodsContext);
};
