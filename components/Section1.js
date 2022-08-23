import Box from '@mui/material/Box';
import Image from 'next/image';
import styles from '@/styles/Section1.module.css';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


export default function Section1() {
    return (
        <div>
            <Box 
                id="section1"
                sx={{
                    width: '100%',
                    height: '50rem',
                    color: '#787878',
                    p: 10,
                    mt: 30,
                    itemAlign: 'center',
                    fontWeight: '700',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap:10
                }}
            >
                <Box
                    sx={{
                        width: '35rem',
                        height: '15rem',
                        fontSize: 18,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                > 
                    <Box   
                        component="span" 
                        sx={{ 
                            color: '#FF8303' 
                        }}
                    >
                    <h2>About Me</h2>
                    </Box>
                    <h4>
                        Hello! my name is Wijitra or you can call me "Wiji". 
                        I enjoy and love to be part of the tech world. 
                        Ever searcing to stack up my knowledge of code to create beautiful, 
                        responsive website and become the best developer I can be!
                    </h4>               
                    <h4>
                        Here are a few technologies I’ve been working with:
                    </h4>
                    <Box
                        sx={{
                            display: 'flex',
                            fontSize: 15,
                            gap:10
                        }}
                    >
                        <Grid item xs={12} md={3}>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon                         
                                            sx={{ 
                                                color: '#FF8303' 
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                    />
                                    Hello
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ArrowRightIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                    />
                                    Hello
                                </ListItem>
                            </List>
                        </Grid>
                    </Box>
                </Box>
                
                <Box>
                    <Image 
                        src='/images/IMG_4452.jpg'
                        width = {300}
                        height={300}
                        className={styles.image} 
                    />
                </Box>
                
            </Box>
        </div>
    )
} 