
const express = require('express');
const router = express.Router();
const signupCtrl = require("../controller/signup");
const loginCtrl = require("../controller/login");
const logoutCtrl = require("../controller/logout");
const updateUserCtrl = require("../controller/updateUser");
const validToken = require("../middleware/validToken");
const auth = require("../middleware/auth");
const { getNotAllowedFoods } = require('../controller/caloriesController'); // Importa el controlador correspondiente



require("dotenv").config();

router.post("/users/signup", signupCtrl);

router.post("/users/login", loginCtrl);

router.post("/users/logout", validToken, auth, logoutCtrl);

// Ruta para obtener alimentos no saludables
router.get('/not-allowed-foods', getNotAllowedFoods);

// Ruta para guardar info de calculadora
router.put("/users/current/:id", validToken, auth, updateUserCtrl);


module.exports = router;
