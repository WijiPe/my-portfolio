import Box from '@mui/material/Box';


export default function Section1() {
    return (
        <div>
            <Box id="section1"
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
        About Me
      </Box>
        </div>
    )
}
