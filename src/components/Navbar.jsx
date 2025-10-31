import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => (
  <AppBar position="fixed" sx={{ bgcolor: '#000' }}>
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Typography variant="h6">XXXXX Homepage</Typography>
      <Box>
       <Button component={RouterLink} to="/" color="inherit">
        Inicio
       </Button>
       <Button component={RouterLink} to="/misiones">
        Misiones
       </Button>
       <Button component="a" href="#exploracion">
        Exploración
       </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
