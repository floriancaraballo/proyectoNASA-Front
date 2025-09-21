import { Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";        // 👈 asegúrate que este existe
import Misiones from "./pages/Misiones.jsx"; // 👈 importa Imagen

function App() {
  return (
    <>
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: "100%",
     overflowX: "hidden", alignItems: "stretch",}}>
      <Navbar />  
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/misiones" element={<Misiones />} />
      </Routes>
      <Footer />
    </Box>

    </>
  );
}

export default App;
