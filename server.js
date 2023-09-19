const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const connection = require("./db/connection");

// Configura CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // Permite el uso de credenciales en las solicitudes
}));

// Ruta para obtener los alimentos no recomendados según el tipo de sangre
app.get('/api/not-allowed-foods/:bloodType', (req, res) => {
  const { bloodType } = req.params;
  // Lee el archivo JSON con los alimentos no recomendados desde la carpeta models
  const notAllowedFoodsData = require('./models/es-productos.json');

  // Filtra los alimentos no recomendados según el tipo de sangre
  const foodsForBloodType = notAllowedFoodsData[bloodType] || [];

  res.json(foodsForBloodType);
});

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server not running. Error .message ${err.message}`);
    process.exit(1);
  });