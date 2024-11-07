import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import { useNavigate } from 'react-router-dom';

const NavBar = ({totalCount, onToggle}) => {
    console.log("total", totalCount)
    const navigate = useNavigate();
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              E-COMMERCE APP
            </Typography>
            <IconButton color="inherit" onClick={()=> navigate("/productsTable")}>
                <InventoryIcon/> Products
            </IconButton>
            <IconButton color="inherit" onClick={onToggle}>
              <Badge badgeContent={totalCount} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      );
}

export default NavBar