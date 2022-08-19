import styles from '@/styles/Index.module.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Layout from '@/components/Layout';

const mouseOver = () => {

    document.getElementById("word1").style.color = "#FF8303";
    document.getElementById("word7").style.color = "#787878";
    document.getElementById("word3").style.color = "#787878";
    document.getElementById("word4").style.color = "#787878";
    document.getElementById("word5").style.color = "#787878";
    document.getElementById("word6").style.color = "#787878";
}

const mouseOut = () => {
    document.getElementById("word1").style.color = "#787878";
    document.getElementById("word7").style.color = "#787878";
    document.getElementById("word3").style.color = "#FF8303";
    document.getElementById("word4").style.color = "#FF8303";
    document.getElementById("word5").style.color = "#FF8303";
    document.getElementById("word6").style.color = "#FF8303";
}

export default function Me() {
    return (
        <div>
        <Box 
            sx={{
                width: '100%',
                height: '24rem',
                p: 10,
                pl:20,
                mt: 10,
                ml: 25,
                fontWeight: '700',
                display: 'flex',
                letterSpacing: 2
            }}
        >
            <h2 className={styles.container2} id= "word1" onMouseOver = {mouseOver} onMouseOut={mouseOut}> 
                Wijitra Stevens
            </h2>
            <div className={styles.details}>
                <h2 className={styles.container3} id= "word7" onMouseOver = {mouseOver} onMouseOut={mouseOut}><span id= "word3">A full </span> of joy and happiness mother who loves to be part of the tech world.
                    I try to <span id= "word4">stack</span> the knowledge of the codes to create the best <span id= "word5">web</span>site and become a great <span id= "word6">developer!</span>
                </h2>
            </div>
            <Image src='/images/IMG_4452.jpg'
                width = {230}
                height={10}
                className={styles.image} 
            />
            
        </Box>
            <div className={styles.container1}></div>
            </div>
    )
}
