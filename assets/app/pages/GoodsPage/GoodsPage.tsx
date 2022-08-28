import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import GoodsList from './components/GoodsList';
import { GoodsContextProvider } from './GoodsContext';
import ListHeader from './components/ListHeader';

const GoodsPage = () => {
    return (
        <GoodsContextProvider>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <ListHeader />
                        <GoodsList/>
                    </Paper>
                </Grid>
            </Grid>
        </GoodsContextProvider>
    );
};

export default GoodsPage;
