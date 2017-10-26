const express = require('express');
const router = express.Router();
const storeController = require ('../controllers/storeControllers');
const storeMiddlware = require ('../middlwares/storeMiddleware');

router.get("/",storeMiddlware.myMiddlware,storeController.homePage);
module.exports = router;