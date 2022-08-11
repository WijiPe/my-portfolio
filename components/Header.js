import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles, StylesContext } from '@mui/styles';
import Link from 'next/link';

// const scroll2El = elID => {
//     window.scrollTo({
//         top: document.getElementById(elID).offsetTop - 60,
//         behavior: 'smooth',
//     });
// };

// const onBtnClick = (e) => {
//     e.preventDefault();
//     const goto = e.target.getAttribute('goto');
//     setTimeout(() => {
//       scroll2El(goto);
//     }, 100);
// }

// goto="section1" onClick={onBtnClick}

const useStyles = makeStyles((theme) => {
    return{
        appbar:{
            position: "fixed",
            height: 45,
        },
        minHeight: {
            minHeight: 45,
        },
    }
})

export default function Header() {
    
    const classes = useStyles();
    return (
        <Box>
            <AppBar className={classes.appbar} style={{backgroundColor:'#F85F36', color: 'black'}}>
                <Toolbar className={classes.minHeight} sx={{  
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent: 'flex-end', 
                    gap: 10,
                    height: 40,
                }}>
                    <Typography variant="h6" component="div">
                        <Link href="#section1">
                            <a >about me</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link href="#section2" >
                            <a>my project</a>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div">
                        <Link href="#section3" >
                            <a>contact me</a>
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

