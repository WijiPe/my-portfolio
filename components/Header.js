import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Navlink from './Navlink';
import { Button } from '@mui/material';

const links = {'#section1':'about me', '#section2':'my project', '#section3':'contact me'}

export default function Header() {

    return (
        <Box>
            <AppBar sx={{backgroundColor:'rgb(0, 00, 00)', color: '#787878', position: "fixed",
            height: 45,}}>
                <Toolbar  sx={{  
                    display: 'flex', 
                    flexDirection: 'row',  
                    justifyContent: 'flex-end', 
                    gap: 5,
                    height: 40,
                    minHeight: 45,
                }}>
                    {Object.keys(links).map((link, i) => (
                        <Typography 
                            variant="h6" component="div"  
                            sx={{ 
                                fontWeight: 600, 
                                fontFamily: 'monospace',
                                color: '#F0E3CA',
                                '&:hover': {
                                color: '#FF8303', 
                                }
                            }}
                        >
                            <Navlink key = {i} title = {links[link]} id={link}/>
                        </Typography>
                    ))}
                    <Button variant="contained">Resume</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}