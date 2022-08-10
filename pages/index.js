import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Layout from '../components/Layout';

const mouseOver = () => {

  document.getElementById("word1").style.color = "#1B1B1B";
  document.getElementById("word7").style.color = "#1B1B1B";
  document.getElementById("word2").style.color = "#FCBC0F";
  document.getElementById("word3").style.color = "#FCBC0F";
  document.getElementById("word4").style.color = "#FCBC0F";
  document.getElementById("word5").style.color = "#FCBC0F";
  document.getElementById("word6").style.color = "#FCBC0F";
}


const mouseOut = () => {
  document.getElementById("word1").style.color = "#787878";
  document.getElementById("word7").style.color = "#787878";
  document.getElementById("word2").style.color = "#F85F36";
  document.getElementById("word3").style.color = "#F85F36";
  document.getElementById("word4").style.color = "#F85F36";
  document.getElementById("word5").style.color = "#F85F36";
  document.getElementById("word6").style.color = "#F85F36";
  document.getElementById("word3").style.fontSize = "xx-large";
  document.getElementById("word4").style.fontSize = "xx-large";
  document.getElementById("word5").style.fontSize = "xx-large";
  document.getElementById("word6").style.fontSize = "xx-large";
}

export default function Home() {

  return (
    <Layout>
      <Box 
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#212121'),
          // color: (theme) =>
          // theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          // m: 15,
          mt: 22,
          textAlign: 'center',
          // fontSize: '1rem',
          fontWeight: '700',
          // border: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10
        }}
      >
        <Image src='/images/IMG_4452.jpg'
              width = {320}
              height={200}
              className={styles.round} 
            />
        <div>
          <h2 className={styles.container2} id= "word1" onMouseOver = {mouseOver} onMouseOut={mouseOut}> 
            Hello, <span id= "word2">I'm </span>Wijitra Stevens.
          </h2>
          <h2 className={styles.container3} id= "word7" onMouseOver = {mouseOver} onMouseOut={mouseOut}><span id= "word3"> A full </span> of joy and happiness mother who loves to be part of the tech world.
          <br></br>
            I try to <span id= "word4">stack</span> the knowledge of the codes to create the best <span id= "word5">web</span>site and become a great <span id= "word6">developer!</span>
          </h2>
        </div>
      </Box>
      <Box id="section1"
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#212121'),
          // color: (theme) =>
          // theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          // m: 15,
          mt: 22,
          textAlign: 'center',
          // fontSize: '1rem',
          fontWeight: '700',
          // border: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        About Me
      </Box>
      <Box id="section2"
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#212121'),
          // color: (theme) =>
          // theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          // m: 15,
          mt: 22,
          textAlign: 'center',
          // fontSize: '1rem',
          fontWeight: '700',
          // border: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        my project
      </Box>
      <Box id="section3"
        sx={{
          boxShadow: 3,
          width: '100%',
          height: '30rem',
          // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#212121'),
          // color: (theme) =>
          // theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 10,
          // m: 15,
          mt: 22,
          textAlign: 'center',
          // fontSize: '1rem',
          fontWeight: '700',
          // border: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        contact Me
      </Box>
    </Layout>
  )
}
