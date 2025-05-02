import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid
} from '@mui/material';

const dummyProducts = [
  { id: 1, name: 'Shoes', price: 999 },
  { id: 2, name: 'Watch', price: 1999 },
];

export default function ProductManagement() {
  const [products, setProducts] = useState(dummyProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [filterText, setFilterText] = useState('');

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { name: '', price: '' },
  });

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const onSubmit = (data) => {
    if (selectedProduct) {
      setProducts((prev) =>
        prev.map((p) => (p.id === selectedProduct.id ? { ...p, ...data } : p))
      );
    } else {
      setProducts((prev) => [...prev, { ...data, id: Date.now() }]);
    }
    reset();
    setSelectedProduct(null);
    setShowForm(false);
  };

  const handleEdit = (product) => {
    reset(product);
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleCreate = () => {
    reset();
    setSelectedProduct(null);
    setShowForm(true);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product Management
      </Typography>

      {/* Filter + Create Button */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <TextField
          label="Search Products"
          variant="outlined"
          size="small"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreate}>
          + Create Product
        </Button>
      </Box>

      {/* Product List and Form */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <List>
              {filteredProducts.map((product) => (
                <Box key={product.id}>
                  <ListItem button onClick={() => handleEdit(product)}>
                    <ListItemText
                      primary={product.name}
                      secondary={`₹${product.price}`}
                    />
                  </ListItem>
                  <Divider />
                </Box>
              ))}
              {filteredProducts.length === 0 && (
                <ListItem>
                  <ListItemText primary="No products found." />
                </ListItem>
              )}
            </List>
          </Paper>
        </Grid>

        {showForm && (
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                {selectedProduct ? 'Edit Product' : 'Create Product'}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  fullWidth
                  label="Product Name"
                  margin="normal"
                  {...register('name')}
                />
                <TextField
                  fullWidth
                  label="Price"
                  type="number"
                  margin="normal"
                  {...register('price')}
                />
                <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                  <Button type="submit" variant="contained">
                    {selectedProduct ? 'Update' : 'Create'}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setShowForm(false);
                      reset();
                    }}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
