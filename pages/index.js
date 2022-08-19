import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Me from '@/components/Me';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>Wiji's Portfolio</title>
        <meta name="description" content="Wijitra Stevens's Portfolio" />
        <meta name="keywords" content="search, keywords, go, here" />
        {/* <link rel="icon" href="/favicon.ico"/>       */}
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Stack spacing={2}>
        <Me />
        <Section1 />
        <Section2  />

      <Box id="section3"
        sx={{
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
      </Stack>
    </Layout>
  )
}
