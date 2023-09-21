
const express = require('express');
const router = express.Router();
const signupCtrl = require("../controller/signup");
const loginCtrl = require("../controller/login");
const logoutCtrl = require("../controller/logout");
const validToken = require("../middleware/validToken");
const auth = require("../middleware/auth");
const { getNotAllowedFoods } = require('../controller/caloriesController'); // Importa el controlador correspondiente



require("dotenv").config();

router.post("/users/signup", signupCtrl);

router.post("/users/login", loginCtrl);

router.post("/users/logout", validToken, auth, logoutCtrl);

// Ruta para obtener alimentos no saludables
router.get('/not-allowed-foods', getNotAllowedFoods);


module.exports = router;
