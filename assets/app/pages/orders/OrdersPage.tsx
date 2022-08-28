import React from 'react';

import Grid from '@mui/material/Grid';

import OrderList from './components/OrderList';
import { OrdersContextProvider } from './OrdersContext';

const OrdersPage = () => {
    return (
        <OrdersContextProvider>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <OrderList />
                </Grid>
            </Grid>
        </OrdersContextProvider>
    );
};

export default OrdersPage;
