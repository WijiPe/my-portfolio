import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import { Autocomplete } from '@mui/material';

const mouseOver = () => {

  document.getElementById("alphabeth1").style.color = "#1B1B1B";
  document.getElementById("alphabeth2").style.color = "red";
  document.getElementById("alphabeth3").style.color = "red";
  document.getElementById("alphabeth4").style.color = "red";
  document.getElementById("alphabeth5").style.color = "red";
  document.getElementById("alphabeth6").style.color = "red";
}


const mouseOut = () => {
  document.getElementById("alphabeth1").style.color = "#1B1B1B";
  document.getElementById("alphabeth2").style.color = "#FCBC0F";
  document.getElementById("alphabeth3").style.color = "#FCBC0F";
  document.getElementById("alphabeth4").style.color = "#FCBC0F";
  document.getElementById("alphabeth5").style.color = "#FCBC0F";
  document.getElementById("alphabeth6").style.color = "#FCBC0F";
}

export default function Home() {


  return (
    <h2 className={styles.container} id= "alphabeth1" onMouseOver = {mouseOver} onMouseOut={mouseOut}> 
      <Box
        sx={{
          boxShadow: 3,
          width: '50rem',
          height: '50rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          // color: (theme) =>
          //   theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          m: 15,
          ml:60,
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '700',
        }}
      >
      Hello, <span id= "alphabeth2">I'm </span>Wijitra Stevens.
      <br></br>
      <span id= "alphabeth3"> A full </span> of joy and happiness mother who loves to be part of the tech world.
      <br></br>
      I try to <span id= "alphabeth4">stack</span> the knowledge of the codes to create the best <span id= "alphabeth5">web</span>site and become a great <span id= "alphabeth6">developer!</span>
      
    </Box>
    </h2>
  )
}
