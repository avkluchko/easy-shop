import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useCartContext } from '../CartContext';
import {processOrder} from '../../OrdersPage/api';
import CartItems from './CartItems';

const CartContent = () => {
    const navigate = useNavigate();

    const { items, clearCart } = useCartContext();

    const [isProcessing, setIsProcessing] = useState(false);

    if (items.length === 0) {
        return (
            <Typography>В корзине пусто.</Typography>
        );
    }

    const startProcessOrder = async () => {
        if (isProcessing) {
            return;
        }

        setIsProcessing(true);

        try {
            const response = await processOrder(items);
            setIsProcessing(false);
            clearCart();
            navigate('/orders');
        } catch (e) {
            console.error(e);
            setIsProcessing(false);
        }
    }

    return (
        <React.Fragment>
            <CartItems/>
            <Box sx={{ mt: 3, mb: 1, mr: 6, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    variant="contained"
                    onClick={startProcessOrder}
                    startIcon={isProcessing && (
                        <CircularProgress size={20} color="inherit" />
                    )}
                >
                    {isProcessing ? 'Сохранение...' : 'Оформить заказ'}
                </Button>
            </Box>
        </React.Fragment>
    );
};

export default CartContent;
