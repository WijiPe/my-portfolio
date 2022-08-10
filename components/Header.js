import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { makeStyles, StylesContext } from '@mui/styles';
import Link from 'next/link';

const scroll2El = elID => {
    window.scrollTo({
      top: document.getElementById(elID).offsetTop - 60,
      behavior: 'smooth',
    });
  };

const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute('goto');
    setTimeout(() => {
      scroll2El(goto);
    }, 100);
  }

const useStyles = makeStyles((theme) => {
    return{
        appbar:{
            position: "fixed",
        }
    }
})

export default function Header() {
    
    const classes = useStyles();
    return (
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
                        <Link href="">
                            <a goto="section1" onClick={onBtnClick}>contact</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="" >
                            <a goto="section2" onClick={onBtnClick}>project</a>
                        </Link>
                    </Typography>
                    <Button color="inherit" >Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}