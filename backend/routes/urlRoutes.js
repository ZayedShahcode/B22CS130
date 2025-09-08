const express= require('express');

const {createShortURL,accessURL, getURLStatistics, getAllUrls} = require("../controller/urlController")


const urlRouter = express.Router();

urlRouter.get("/shorturls",getAllUrls);

urlRouter.get("/shorturls/:shortcode",getURLStatistics);
urlRouter.post("/shorturls",createShortURL)

module.exports = urlRouter;