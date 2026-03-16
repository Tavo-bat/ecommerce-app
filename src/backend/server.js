const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.json({ message: 'API E-Commerce funcionando' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
