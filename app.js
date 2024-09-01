const https = require('https');
const fs = require('fs');
const express = require('express'); // Asumiendo que estás usando Express

const app = express();

// Cargar los certificados SSL
const options = {
    key: fs.readFileSync('/ruta/a/tu/server.key'),
    cert: fs.readFileSync('/ruta/a/tu/server.crt')
};

// Tu código de configuración de rutas aquí
app.get('/', (req, res) => {
    res.send('Hello, HTTPS!');
});

// Crear servidor HTTPS
https.createServer(options, app).listen(443, () => {
    console.log('Servidor HTTPS ejecutándose en el puerto 443');
});
