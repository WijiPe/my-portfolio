import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';

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

const links = {'#section1':'about me', '#section2':'my project', '#section3':'contact me'}

const useStyles = makeStyles((theme) => {
    return{
        appbar:{
            position: "fixed",
            height: 45,
        },
        minHeight: {
            minHeight: 45,
        },
        clickableLink: {
            color: '#F0E3CA',
            '&:hover': {
            color: '#FF8303',
            },
        }
    }
})

export default function Header() {

    const classes = useStyles();

    return (
        <Box>
            <AppBar className={classes.appbar}  sx={{backgroundColor:'rgb(0, 00, 00)', color: '#787878'}}>
                <Toolbar className={classes.minHeight} sx={{  
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent: 'flex-end', 
                    gap: 10,
                    height: 40,
                }}>
                    {Object.keys(links).map((link, i) => (
                        <Typography 
                            variant="h6" component="div"  
                            sx={{ 
                                fontWeight: 600, 
                                fontFamily: 'monospace' 
                            }} 
                            className={classes.clickableLink}>
                            <Navbar  key = {i} title = {links[link]} id={link}/>
                        </Typography>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

