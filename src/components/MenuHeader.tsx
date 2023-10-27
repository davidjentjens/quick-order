import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useCart } from '../providers/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttributionIcon from '@mui/icons-material/Attribution';

import logo512 from '../assets/logo512.png'
import { toast } from 'react-toastify';
import { Tooltip } from '@mui/material';

export default function MenuHeader() {
    const { toggleCartOpen } = useCart()

    const callServer = () => {
        toast(`Waiter has been called`, { type: 'success', autoClose: 1000 });
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' color='error'>
                <Toolbar>
                    <img src={logo512} alt='Logo' width={48} style={{ marginRight: 16 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        QuickOrder
                    </Typography>
                    <Tooltip title="Call waiter for help">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                            onClick={callServer}
                        >
                            <AttributionIcon />
                        </IconButton>
                    </Tooltip>
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
                </Toolbar>
            </AppBar>
            <div style={{ height: 48 }} />
        </Box>
    );
}