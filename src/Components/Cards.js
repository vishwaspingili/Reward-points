import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import products from '../productData.json';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

export default function MediaCard({ products, handleAddToCart }) {

    return (
        <Grid style={{ padding: '1rem' }} container spacing={2}>
            {products && products.map((data, index) => {
                return (
                    <Grid key={index} item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={data.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {data.product}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    ${data.price}
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                                <Button size="small" variant="outlined" startIcon={<AddIcon />} onClick={() => handleAddToCart(data)}>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>

    );
}
