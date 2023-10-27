import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useCart } from '../providers/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttributionIcon from '@mui/icons-material/Attribution';

import logo512 from '../assets/logo512.png'
import { toast } from 'react-toastify';

export default function MenuHeader() {
    const { toggleCartOpen } = useCart()

    const callServer = () => {
        toast(`Server has been called`, { type: 'success' });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='error'>
                <Toolbar style={{ gap: 8 }}>
                    <img src={logo512} alt='Logo' width={48} style={{ marginRight: 16 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        QuickOrder
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={toggleCartOpen}
                        color="inherit"
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={callServer}
                    >
                        <AttributionIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}