// src/pages/Misiones.jsx
import React from "react";
import { Box, Typography, Button, Toolbar } from "@mui/material";
import fondoEspacio from "../assets/HomeNasa.jpg";

function Misiones() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Espacio para AppBar fijo */}
      <Toolbar />

      {/* Contenido principal */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          width: "100vw",
          height: "calc(100vh - 64px)",
          backgroundImage: `url(${fondoEspacio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          px: 0,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", textShadow: "2px 2px 8px black" }}
        >
          Misiones de la NASA 🚀
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ textShadow: "1px 1px 6px black", maxWidth: 600 }}
        >
          Descubre las misiones más importantes de la NASA, que han permitido
          explorar Marte, estudiar el Sol y observar las galaxias más lejanas.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 3 }}
          onClick={() => alert("Aquí generaremos la Imagen del Día de la NASA ✨")}
        >
          Ver Imagen del Día
        </Button>
      </Box>
    </Box>
  );
}

export default Misiones;
