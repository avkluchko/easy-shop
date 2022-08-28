import React from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Title from '../../components/Title';
import OrderList from './components/OrderList';
import { OrdersContextProvider } from './OrdersContext';

const OrdersPage = () => {
    return (
        <OrdersContextProvider>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Title>Заказы</Title>
                        <OrderList />
                    </Paper>
                </Grid>
            </Grid>
        </OrdersContextProvider>
    );
};

export default OrdersPage;
