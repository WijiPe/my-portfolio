import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useEffect} from 'react'


export default function Project1() {

    return (
        <Typography
            component="div"
            variant="body1"
            style={{
                width: '80rem',
                height: '35rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems:"center",
            }}
        >
            <Box
                sx={{
                    width: '30rem',
                    height: '30rem',
                    bgcolor: '#787878',
                    mt: 16,
                    ml: 50,
                    borderRadius: '50%',
                    border: 2,
                    position: 'absolute',
                    display: 'flex',
                    pl: 25,
                    pt: 10,
                    // zIndex: 'modal',
                    fontFamily: 'Albert Sans',
                    color: '#787878',
                    // borderColor: '#A35709'
                }}
            >
                <h5>Details</h5>
            </Box>
            <Box
                sx={{
                    // zIndex: 'tooltip',
                    mt: 15,
                    mr: 50,
                    fontFamily: 'Albert Sans',
                    color: '#F0E3CA',
                    letterSpacing: 3,
                }}
            >   
                <Box   
                    component="span" 
                    sx={{ 
                        color: '#787878', 
                        letterSpacing: 6,  
                    }}>
                    <h2>Projects_________________</h2>
                </Box>
                <h3>MyWatchlist!</h3>
                <Box
                    sx={{
                        opacity: 0.4,
                        '&:hover': {
                            opacity: 1,
                        }
                    }}
                >
                    <Link href='http://34.105.11.176/mywatchlist/'>
                        <a>
                            <Image src='/images/mywatchlist-homepage.jpg'
                                width = {430}
                                height={250}
                            />
                        </a>
                    </Link>
                </Box>
                <Box component="span" sx={{ color: '#787878', letterSpacing: 2 }}>
                    <h5>Python MySQL MovieDB-API</h5>
                </Box>
            </Box>
        </Typography>
    )
}
