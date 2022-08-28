export interface GoodsProps {
    id: number;
    catalog: CatalogProps;
    measure: MeasureProps;
    name: string;
    quantity: number;
    regprice: number;
}

export interface CatalogProps {
    id: number;
    name: string;
}

export interface MeasureProps {
    id: number;
    name: string;
}
