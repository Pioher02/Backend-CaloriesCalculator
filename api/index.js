express = require("express");
const router = express.Router();
const signupCtrl = require("../controller/signup");
const loginCtrl = require("../controller/login");
const logoutCtrl = require("../controller/logout");
const validToken = require("../middleware/validToken");
const auth = require("../middleware/auth");

require("dotenv").config();

router.post("/users/signup", signupCtrl);

router.post("/users/login", loginCtrl);

router.post("/users/logout", validToken, auth, logoutCtrl);

module.exports = router;
