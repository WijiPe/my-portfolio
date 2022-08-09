import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Image from 'next/image';

const mouseOver = () => {

  document.getElementById("alphabeth1").style.color = "#1B1B1B";
  document.getElementById("alphabeth2").style.color = "red";
  document.getElementById("alphabeth3").style.color = "red";
  document.getElementById("alphabeth4").style.color = "red";
  document.getElementById("alphabeth5").style.color = "red";
  document.getElementById("alphabeth6").style.color = "red";
}


const mouseOut = () => {
  document.getElementById("alphabeth1").style.color = "#787878";
  document.getElementById("alphabeth2").style.color = "red";
  document.getElementById("alphabeth3").style.color = "red";
  document.getElementById("alphabeth4").style.color = "red";
  document.getElementById("alphabeth5").style.color = "red";
  document.getElementById("alphabeth6").style.color = "red";
}

export default function Home() {

  return (
    <div>
      <Box
         sx={{
          boxShadow: 3,
          // width: '100%',
          height: '25rem',
          textAlign: 'center',
          p: 5,
          fontSize: '3rem',
          // borderRadius: 1 
        }}
      >
        <Image src='/images/IMG_4452.jpg'
              width = {260}
              height={250}
              className={styles.round} 
            />
        <h2>WijiPe</h2>
      </Box>
      <Box 
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#212121'),
          // color: (theme) =>
          // theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          pl: 35,
          pr: 35,
          // m: 15,
          // ml:60,
          textAlign: 'center',
          fontSize: '1.3rem',
          fontWeight: '700',
          // border: 1,
          position: 'relative',
        }}
      >
        <h2 className={styles.container2} id= "alphabeth1" onMouseOver = {mouseOver} onMouseOut={mouseOut}> 
          Hello, <span id= "alphabeth2">I'm </span>Wijitra Stevens.
          <br></br>
          <span id= "alphabeth3"> A full </span> of joy and happiness mother who loves to be part of the tech world.
          <br></br>
          I try to <span id= "alphabeth4">stack</span> the knowledge of the codes to create the best <span id= "alphabeth5">web</span>site and become a great <span id= "alphabeth6">developer!</span>
        </h2>
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          textAlign: 'center',
          mt: 30,
        }}
      >
      </Box>
    </div>
  )
}
