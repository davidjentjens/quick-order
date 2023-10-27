import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

// Mock de dados (substitua pelo seu mock ou dados reais)
const mockProducts = [
  { id: 1, name: 'Product 1', price: 10.0 },
  { id: 2, name: 'Product 2', price: 15.0 },
  { id: 3, name: 'Product 3', price: 20.0 },
];

export default function ProductsPanel() {
  const [products] = useState(mockProducts);

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2 , marginLeft: 2}}>
        Products
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft: 2}}>
        {products.map((product) => (
          <Box key={product.id} sx={{ border: 1, borderColor: 'divider', padding: 2, marginBottom: 2 }}>
            {/* Exiba os detalhes de cada produto, como ID, nome, preço, etc. */}
            <Typography variant="body1">Product ID: {product.id}</Typography>
            <Typography variant="body1">Name: {product.name}</Typography>
            <Typography variant="body1">Price: {product.price}</Typography>
            {/* Adicione mais informações do produto conforme necessário */}
          </Box>
        ))}
      </Box>
    </div>
  );
}
