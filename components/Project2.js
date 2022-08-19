import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => {
//     return{
//         img:{
//             opacity: 0.4,
//             '&:hover': {
//                 opacity: 1,              
//             },
//         },
//     }
// })

export default function Project2() {

    // const classes = useStyles();

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
                    mr: 45,
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
                    mt: 22,
                    ml: 55,
                    fontFamily: 'Albert Sans',
                    color: '#F0E3CA',
                    letterSpacing: 3,
                    }}
            >
                <Box 
                    component="span" 
                    sx={{ 
                        textAlign: 'right',
                    }}
                >
                    <h3>Bootflix</h3>
                </Box>
                <Box
                    sx={{
                        opacity: 0.4,
                        '&:hover': {
                            opacity: 1,
                        }
                    }}
                >
                    <Link href='http://34.105.11.176/bootflix/'>
                    <a>
                        <Image src='/images/bootflix-homepage.jpg'
                        width = {430}
                        height={250}
                    />
                        </a>
                    </Link>
                </Box>
                <Box 
                    component="span" 
                    sx={{ 
                        color: '#787878', 
                        letterSpacing: 2, 
                        textAlign: 'right'
                    }}>
                        <h5>React Node MovieDB-API Material Ui</h5>
                </Box>
            </Box>
        </Typography>
    )
}