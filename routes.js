const express = require("express");
const router = express.Router();
const loginController = require("./controllers/loginController")
const clientController = require("./controllers/clientController")
const moduleController = require("./controllers/moduleController")
const personnelController = require("./controllers/personnelController")
const accompController = require("./controllers/accompController");
const form = require('./controllers/form')
const { append } = require("express/lib/response");
const { route } = require("express/lib/application");
const app = express();


router.post("/login",loginController.login);

router.post("/client",clientController.client);
router.get("/client",clientController.client);

router.post("/module",moduleController.module);
router.get("/module",moduleController.module);

router.post("/personnel",personnelController.personnel);
router.get("/personnel",personnelController.personnel);

router.post("/accomp",accompController.accomp);
router.get("/accomp",accompController.accomp);
router.post("/logout",loginController.logout);

router.post("/data",)


router.post("/form",form.insert)





module.exports = router;

