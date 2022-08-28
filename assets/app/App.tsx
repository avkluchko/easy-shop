import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import Header from './layout/Header';
import CartPage from './pages/CartPage';
import GoodsPage from './pages/GoodsPage';
import OrdersPage from './pages/OrdersPage';
import { CartContextProvider } from './pages/CartPage/CartContext';

const App = () => {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Box sx={{ display: 'flex' }}>
                    <Header/>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) => theme.palette.grey[100],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar/>
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <Routes>
                                <Route path="/" element={<GoodsPage/>}/>
                                <Route path="/cart" element={<CartPage/>}/>
                                <Route path="/orders" element={<OrdersPage/>}/>
                            </Routes>
                        </Container>
                    </Box>
                </Box>
            </CartContextProvider>
        </BrowserRouter>
    );
};

export default App;
