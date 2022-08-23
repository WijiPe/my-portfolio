import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';

export default function Me() {

    const iconStyle = {
            color: '#101010',
            '&:hover': {
            color: '#FF8303',
        },
    };

    return (
        <Typography
            component="div"
            variant="body1"
            style={{
                width: '80rem',
                height: '35rem',
                position: 'relative',
                display: 'flex',
            }}
        >
            <Box 
                sx={{
                    width: '30rem',
                    height: '30rem',
                    pt: 16,
                    pl: 9,
                    mt: 10,
                    ml: 55,
                    fontWeight: '700',
                    display: 'flex',
                    flexDirection: 'column',
                    letterSpacing: 2,
                    border: 2,
                    position: 'absolute',
                    borderRadius: '50%',
                    color:'#787878',
                    '&:hover': {
                        color: '#FF8303',
                    }
                }}
            >   
                <Box
                    sx={{
                        width: '25rem',
                        height: '5rem',
                        fontSize: 30,
                        fontFamily: 'Albert Sans',
                        '&:hover': {
                            color: '#FF8303',
                        },
                    }}
                >
                    <h2>
                        Wijitra Stevens
                    </h2>
                    <Box   
                        component="span"               
                        sx={{
                            bgcolor:'#0D0D0D',
                            fontFamily: 'Albert Sans',
                            color: '#787878',
                            fontSize: 15,
                            '&:hover': {
                                color: '#787878',
                            },
                        }}
                    >
                        <h2> A full stack web developer. </h2>
                    </Box>
                </Box>
            </Box>
            
            <Box 
                sx={{
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '50%',
                    mt:57,
                    ml:55,
                    pl:8.5,
                    pt:3,
                    bgcolor: '#A35709',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    position: 'absolute',
                    border:2,
                    color:'#FF8303'
                }}>
                    <GitHubIcon 
                        onClick={event =>  window.location.href='https://github.com/WijiPe'}
                        sx={
                            iconStyle
                        }
                    />
                    <LinkedInIcon  
                        onClick={event =>  window.location.href='https://www.linkedin.com/in/wijitra-stevens-475b7684/'}
                        sx={
                            iconStyle
                        }
                    />
                    <MailIcon 
                        onClick={event =>  window.location.href='mailto:peawseaw@gmail.com?subject=I saw your portfolio!'} 
                        target="_blank"
                        sx={
                            iconStyle
                        }
                    />
            </Box>
        </Typography>
    )
}
