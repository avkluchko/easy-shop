import { CatalogProps } from '../../interfaces/goods';
import { PaginatedResponseProps } from '../../interfaces/pagination';

const fetchUrl = '/api/catalogs';

export const fetchCatalogs = async (): Promise<PaginatedResponseProps<CatalogProps>> => {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return {
        totalItems: data['hydra:totalItems'],
        items: data['hydra:member'],
    };
};
