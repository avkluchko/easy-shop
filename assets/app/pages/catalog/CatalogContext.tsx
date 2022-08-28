import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { CatalogProps } from '../../interfaces/goods';
import { PaginatedResponseProps } from '../../interfaces/pagination';
import { fetchCatalogs } from './api';

interface ContextState {
    catalogs: CatalogProps[],
    totalItems: number;
    isLoading: boolean;
}

const CatalogContext = createContext({} as ContextState);

type Props = {
    children?: React.ReactNode;
};

export const CatalogContextProvider: React.FC<Props> = (props) => {
    const [catalogs, setCatalogs] = useState<CatalogProps[]>([]);

    const [totalItems, setTotalItems] = useState(0);

    const { data, isLoading } = useQuery<PaginatedResponseProps<CatalogProps>>('initial', fetchCatalogs);

    useEffect(() => {
        let mounted = true;

        if (!data) {
            return;
        }

        if (mounted) {
            setTotalItems(data.totalItems);
            setCatalogs(data.items);
        }

        return () => {
            mounted = false
        };
    }, [data]);

    return (
        <CatalogContext.Provider
            value={{
                catalogs,
                totalItems,
                isLoading,
            }}
        >
            {props.children}
        </CatalogContext.Provider>
    );
};

export const useCatalogContext = () => {
    return useContext(CatalogContext);
};
