import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import styles from '@/styles/Section2.module.css'
import { Typography } from '@mui/material';

export default function Section2() {
    return (
        <Typography
            component="div"
            variant="body1"
            id="section2"
            style={{
                width: '80rem',
                height: '80rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems:"center",

            }}
        >
            <Box
                sx={{
                    width: '80rem',
                    height: '5rem',
                    position: 'absolute',
                    display: 'flex',
                    ml:55,
            }}
                >
                <h2>My Projects</h2>
            </Box>
            <Box
                sx={{
                    width: '30rem',
                    height: '30rem',
                    bgcolor: (theme) => (theme.palette.mode === 'dark'),
                    mt: 16,
                    ml: 40,
                    borderRadius: '50%',
                    border: 2,
                    position: 'absolute',
                    display: 'flex',
                    pl: 25,
                    pt: 10,
                    // textAlign: 'center',
                    // fontWeight: '700',
                    // flexDirection: 'row',
                    zIndex: 'modal',
                    // alignItems:"center",
                    // justifyContent: 'center',
                }}
            >
                <h5>Details</h5>
            </Box>
            <Box 
                sx={{
                    zIndex: 'tooltip',
                    mt: 23,
                    mr: 25,
                }}
                className={styles.container1}
            >        
                <h3>MyWatchlist Website</h3>
                    <Link href='http://34.105.11.176/mywatchlist/'>
                        <a>
                            <Image src='/images/mywatchlist-homepage.jpg'
                                width = {430}
                                height={250}
                            />
                        </a>
                    </Link>
            </Box>
        </Typography>
            




    )
}
