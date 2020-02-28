import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            Brepi
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Button 
            style={{ marginLeft: 8 }}
            variant='contained' 
            to='/beers' 
            component={NavLink} 
            activeClassName="selected"
          >Beers</Button>
          <Button 
            style={{ marginLeft: 8 }} 
            variant='contained' 
            to='/orders'
            component={NavLink} 
            activeClassName="selected"
          >Orders</Button>
        </Toolbar>
      </AppBar> 
    </div>
  );
}
