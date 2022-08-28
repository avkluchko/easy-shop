import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';

const HomePage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <Title>Каталог товаров</Title>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default HomePage;
