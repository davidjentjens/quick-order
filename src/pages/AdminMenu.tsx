import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import OrdersPanel from './OrdersPanel'; // Componente para exibir pedidos
import ProductsPanel from './ProductsPanel'; // Componente para administrar produtos
import MenuHeader from '../components/MenuHeader';

export default function AdminMenu() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: any, newValue: React.SetStateAction<number>) => {
    setCurrentTab(newValue);
  };

  return (
      <div>
        <MenuHeader />
      <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2, marginTop: 2}}>
        Admin Dashboard
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={currentTab} onChange={handleTabChange} centered>
          <Tab label="Orders" />
          <Tab label="Products" />
        </Tabs>
      </Box>

      {currentTab === 0 && <OrdersPanel />} {/* Mostra OrdersPanel quando a aba é "Orders" */}
      {currentTab === 1 && <ProductsPanel />} {/* Mostra ProductsPanel quando a aba é "Products" */}
    </div>
  );
}
