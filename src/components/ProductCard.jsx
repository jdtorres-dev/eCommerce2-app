import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

const ProductCard = ({products, onIncrement, onDecrement }) => {
    console.log (products)
    return (
        <Grid container>
          {
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    width="100%"
                    height="auto"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{product.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {product.description}
                    </Typography>
                    <Typography variant="h5">${product.price}</Typography>
                  </CardContent>
                  <CardActions sx={{ width: '100%', justifyItems: "center"}}>
                    {product.value > 0 ?(
                        <><Button size="medium" variant="contained" onClick={() => onIncrement(product.id)}>+</Button>
                        <Typography>{product.value}</Typography>
                        <Button size="medium" variant="contained" onClick={() => onDecrement(product.id)}>-</Button></>
                    ) : <Button size="medium" variant="contained" onClick={() => onIncrement(product.id)}>ADD TO CART</Button>}
                        
                 </CardActions>
                </Card>
              </Grid>
              
            ))
         }
        </Grid>
      );
    };

export default ProductCard