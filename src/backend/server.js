const express = require('express');
const path = require('path'); // <-- Paso A: Importar la herramienta de rutas
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Paso B: Abrir la puerta a los archivos de diseño (CSS, Imágenes, JS del cliente)
app.use(express.static(path.join(__dirname, '../frontend')));

// Rutas
app.get('/', (req, res) => {
    // Cambiamos res.json por res.sendFile
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
