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
        <Box>
            <AppBar className={classes.appbar} style={{backgroundColor:'#F85F36', color: 'black'}}>
                <Toolbar sx={{  
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent: 'flex-end', 
                    gap: 10
                }}>
                    <Typography variant="h6" component="div">
                        <Link href="">
                            <a goto="section1" onClick={onBtnClick}>about me</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link href="" >
                            <a goto="section2" onClick={onBtnClick}>my project</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link href="" >
                            <a goto="section3" onClick={onBtnClick}>contact me</a>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}