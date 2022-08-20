import styles from '@/styles/Index.module.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
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
                // flexDirection: 'column',
                // alignItems:"center",
            }}
        >
            <Box 
                sx={{
                    width: '30rem',
                    height: '30rem',
                    pl: 10,
                    mt: 10,
                    ml: 50,
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
                        width: '20rem',
                        height: '5rem',
                        // ml: 10,
                        mt: 15,
                        fontSize: 20,
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
                            width: '20rem',
                            bgcolor:'#0D0D0D',
                            fontFamily: 'Albert Sans',
                            color: '#787878',
                            fontSize: 10,
                            '&:hover': {
                                color: '#787878',
                            },
                        }}
                    >
                        <h2> A full of joy and happiness mother who loves to be part of the tech world.
                        I try to <span id= "word4">stack</span> the knowledge of the codes to create the best <span id= "word5">web</span>site and become a great <span id= "word6">developer!</span>
                    </h2>
                    </Box>
                </Box>
            </Box>
            <Box                 
                sx={{
                    position: 'absolute',
                    ml:90,
                    mt:5,
                }}
            >
                <Image src='/images/IMG_4452.jpg'
                    width = {230}
                    height={230}
                    className={styles.image} 
                />
            </Box>
            <Box 
                sx={{
                    width: '10rem',
                    height: '10rem',
                    borderRadius: '50%',
                    mt:57,
                    ml:50,
                    pl:8.7,
                    pt:3,
                    bgcolor: '#A35709',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderColor: '#A35709',
                    position: 'absolute',
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
