const express = require("express");
const cors = require("cors");
const connection = require("./db/connection");
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

require("dotenv").config();

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

//ruta para obtener alimentos no permitidos por tipo de sangre
const notAllowedFoodsRoutes = require('./routes/notAllowedFoodsRoutes');

app.use('/api/not-allowed-foods', notAllowedFoodsRoutes);

require("./config/config-passport");

app.use((_, res) => {
  res.status(404).json({
    status: "error",
    code: 404,
    message: `Use api on routes: 
    /api/signup - registration user {username, email, password}
    /api/login - login {email, password}`,
    data: "Not found",
  });
});

app.use((err, _, res) => {
  console.log(err.stack);
  res.status(500).json({
    status: "fail",
    code: 500,
    message: err.message,
    data: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;

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

