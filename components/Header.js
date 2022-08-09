import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
    return{
        appbar:{
            width: '70%',
            position: "fixed",
            marginRight: 250
        },
        // toolbar: theme.mixins.toolbar
    }
})

  export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.toolbar}>
            <Box sx={{ 
        flexGrow: 1,
        }}>
        <AppBar className={classes.appbar} style={{backgroundColor:'#F85F36'}} >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

        </div>
      
    );
  }