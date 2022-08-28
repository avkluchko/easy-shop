import { GoodsProps } from '../../interfaces/GoodsProps';
import { PaginatedResponseProps } from '../../interfaces/Pagination';

const fetchUrl = '/api/goods';

export const fetchGoods = async (): Promise<PaginatedResponseProps<GoodsProps>> => {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return {
        totalItems: data['hydra:totalItems'],
        items: data['hydra:member'],
    };
};
