// src/pages/Misiones.jsx
import React, { useState } from "react";
import { Box, Typography, Button, Toolbar } from "@mui/material";
import fondoEspacio from "../assets/HomeNasa.jpg";

function Misiones() {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApod = async () => {
    setLoading(true);
    setError(null);
    try {
      // Cambia la URL por la de tu backend si es diferente
      const response = await fetch("http://localhost:5073/api/apodimage");
      if (!response.ok) throw new Error("Error al obtener la imagen");
      const data = await response.json();
      setApod(data);
    } catch (err) {
      setError(err.message);
      setApod(null);
    } finally {
      setLoading(false);
    }
  };

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
          onClick={fetchApod}
        >
          Ver Imagen del Día
        </Button>
        {loading && <Typography sx={{ mt: 2 }}>Cargando...</Typography>}
        {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
        {apod && (
          <Box sx={{ mt: 3, background: "rgba(0,0,0,0.7)", p: 2, borderRadius: 2 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>{apod.title}</Typography>
            <img src={apod.url} alt={apod.title} style={{ maxWidth: "100%", borderRadius: 8 }} />
            <Typography variant="body1" sx={{ mt: 1 }}>{apod.explanation}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Misiones;
