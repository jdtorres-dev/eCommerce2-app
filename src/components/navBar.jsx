import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'

const navBar = ({totalCount, onToggle}) => {
    console.log("total", totalCount)
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              E-COMMERCE APP
            </Typography>
            <IconButton color="inherit" onClick={onToggle}>
              <Badge badgeContent={totalCount} color="secondary">
                <ShoppingCartIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      );
}

export default navBar