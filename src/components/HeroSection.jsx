import { Box, Typography, Button } from '@mui/material';
import fondoEspacio from '../assets/HomeNasa.jpg';

const HeroSection = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      width: '100vw',
      height: 'calc(100vh - 64px)',
      overflowX: 'hidden',
      backgroundImage: `url(${fondoEspacio})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      px: 0,
      boxSizing: "border-box",
    }}
  >
    <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 8px black' }}>
      Explora el Universo
    </Typography>
    <Typography variant="h5" gutterBottom sx={{ textShadow: '1px 1px 6px black' }}>
      Descubre misiones, planetas y secretos del espacio
    </Typography>
    <Button variant="contained" color="secondary" size="large" sx={{ mt: 3 }}>
      Empezar la aventura
    </Button>
  </Box>
);

export default HeroSection;
