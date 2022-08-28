import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useGoodsContext } from '../GoodsContext';
import { useCatalogContext } from '../../catalog/CatalogContext';

const CatalogSelect = () => {
    const { category, changeCategory } = useGoodsContext();

    const { catalogs, isLoading } = useCatalogContext();

    const handleChange = (event: SelectChangeEvent) => {
        changeCategory(event.target.value as string);
    };

    return (
        <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="category-select">Категория</InputLabel>
            <Select
                labelId="category-select"
                value={category || ''}
                label="Категория"
                onChange={handleChange}
                disabled={isLoading}
            >
                <MenuItem value={''}>Все категории</MenuItem>
                {catalogs.map(item => (
                    <MenuItem
                        key={`catalog_${item.id}`}
                        value={item.id}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CatalogSelect;
