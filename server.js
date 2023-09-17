const express = require("express");
const cors = require("cors");
const connection = require("./Backend/db/connection");
require("dotenv").config();

const app = express();

app.use(express.json());

// Configuración de CORS
const corsOptions = {
  origin: "*", // "https://tudominio.com", Permite solicitudes desde cualquier origen (durante el desarrollo)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions)); // Aplica la configuración de CORS

require("./Backend/config/config-passport");

const routerApi = require ("./Backend/api");
app.use("/api", routerApi);

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

const PORT = process.env.PORT || 3001;

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
