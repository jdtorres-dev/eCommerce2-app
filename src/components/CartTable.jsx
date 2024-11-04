import React from 'react'
import {
    Icon,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import DeleteIcon from '@mui/icons-material/Delete';
  import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';

const CartTable = ({products, onDelete, onIncrement, onDecrement}) => {

const cartItems = products.filter((product) => product.value > 0)


  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={4}>Details</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell align="center" colSpan={3}>Action</TableCell>
                    
                </TableRow>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell>Sum</TableCell>
                    <TableCell>Delete</TableCell>
                    <TableCell>Add</TableCell>
                    <TableCell>Remove</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cartItems.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.title}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.value}</TableCell>
                            <TableCell>${row.price}</TableCell>
                            <TableCell>${`${row.value * row.price}`}</TableCell>
                            <TableCell>
                                <IconButton onClick={()=> onDelete(row.id)}><DeleteIcon/></IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={()=> onIncrement(row.id)}><AddIcon/></IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={()=> onDecrement(row.id)}><RemoveIcon/></IconButton>
                            </TableCell>
                        </TableRow>
                    ))
                }
                <TableRow>
                        <TableCell rowSpan={3}/>
                        <TableCell colSpan={2}>Subtotal</TableCell>
                        <TableCell align="right">${cartItems.reduce((total, row) => total + (row.value * row.price), 0)}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default CartTable