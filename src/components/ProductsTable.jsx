import { Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { Link, useNavigate } from 'react-router-dom';

const ProductsTable = ({products, onDelete}) => {
    const navigate = useNavigate()
  return (
    <Container>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell align='center' style={{ fontWeight: 'bold' }}>Product Name</TableCell>
                    <TableCell align='center' style={{ fontWeight: 'bold' }}>Product Price</TableCell>
                    <TableCell align='center' style={{ fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.title}</TableCell>
                        <TableCell>${row.price}</TableCell>
                        <TableCell>
                            <Tooltip title="Edit"><IconButton onClick={()=>navigate(`/products/${row.id}/edit`)}><EditIcon/></IconButton></Tooltip>
                            <Tooltip title="Delete"><IconButton onClick={()=>onDelete(row.id)} ><DeleteIcon/></IconButton></Tooltip>
                        </TableCell>
                    </TableRow>
                ))

                }
            </TableBody>
        </Table>
    </TableContainer>
    </Container>
  )
}

export default ProductsTable