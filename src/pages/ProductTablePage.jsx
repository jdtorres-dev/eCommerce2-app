import React from 'react'
import ProductsTable from '../components/ProductsTable'
import { Button, Container, Grid2 as Grid, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ProductTablePage = ({ products, onDelete }) => {
    return (
        <Container>
        <Grid container spacing={2} justifyContent={"flex-end"} textAlign={"right"}>
            <Grid size={4}>
                <Button
                    sx={{ mt: 2 }}
                    variant="outlined"
                    startIcon={<ArrowBackIosIcon />}
                    LinkComponent={Link}
                    to="/">
                    Back
                </Button>
                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    startIcon={<Add />}
                    LinkComponent={Link}
                    to="/products/new">
                    Add Product
                </Button>
            </Grid>
            <Grid size={12}>
                <ProductsTable products={products} onDelete={onDelete} />
            </Grid>
        </Grid>
        </Container>
    )
}

export default ProductTablePage