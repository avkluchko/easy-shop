import qs from 'query-string';

import { Goods } from '../../interfaces/goods';
import { PaginatedResponseProps } from '../../interfaces/pagination';

const fetchUrl = '/api/goods';

export const fetchGoods = async (category?: string, page = 1): Promise<PaginatedResponseProps<Goods>> => {
    const url = qs.stringifyUrl({
        url: fetchUrl,
        query: {
            'catalog.id': category,
            page: page > 1 ? page : undefined
        }
    });

    const response = await fetch(url);
    const data = await response.json();

    return {
        totalItems: data['hydra:totalItems'],
        items: data['hydra:member'],
    };
};
