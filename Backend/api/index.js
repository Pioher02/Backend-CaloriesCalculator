express = require("express");
const router = express.Router();
const signupCtrl = require("../controllers/signup");
const loginCtrl = require("../controllers/login");
const logoutCtrl = require("../controllers/logout");
const validToken = require("../middleware/validToken");
const auth = require("../middleware/auth");

require("dotenv").config();


router.post("/users/signup", signupCtrl);

router.post("/users/login", loginCtrl);

router.post("/users/logout", validToken, auth, logoutCtrl);


module.exports = router;
