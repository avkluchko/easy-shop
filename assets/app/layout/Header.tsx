import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <AppBar position="absolute">
        <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 3 }}
            >
                Easy Shop
            </Typography>
            <Button
                color="inherit"
                component={NavLink}
                to="/"
            >
                Каталог
            </Button>
            <Button
                color="inherit"
                component={NavLink}
                to="/orders"
            >
                Заказы
            </Button>
            <Box sx={{ flexGrow: 1 }}/>
            <Box>
                <IconButton
                    component={NavLink}
                    to="/cart"
                    size="large"
                    aria-label="items in shopping cart"
                    color="inherit"
                >
                    <Badge badgeContent={4} color="error">
                        <ShoppingCart/>
                    </Badge>
                </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
);

export default Header;
