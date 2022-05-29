const express = require("express");
const router = express.Router();
const loginController = require("./controllers/loginController")
const clientController = require("./controllers/clientController")
const moduleController = require("./controllers/moduleController")
const personnelController = require("./controllers/personnelController")
const accompController = require("./controllers/accompController");
const form = require('./controllers/form')
const app = express();


router.post("/login",loginController.login);

router.post("/client",clientController.client);
router.get("/client",clientController.client);

router.post("/module",moduleController.module);
router.get("/module",moduleController.module);

router.get("/module/:id" , moduleController.getModule)

router.post("/personnel",personnelController.personnel);
router.get("/personnel/:id",personnelController.personnel);

router.post("/accomp",accompController.accomp);
router.get("/accomp",accompController.accomp);
router.post("/logout",loginController.logout);

router.post("/data",)


router.post("/form",form.insert)
router.get("/form/:id/",form.getForm)
router.get("/form",form.getListOfForms)
router.get("/formdate",form.getListOfDate)



router.post("/formModule",moduleController.formModule)

router.get("/moduleForm/:id",moduleController.getModuleByIdForm)


router.get("/activeusers",clientController.activeUsers)
router.get("/inactiveusers",clientController.inactiveUsers)


module.exports = router;

