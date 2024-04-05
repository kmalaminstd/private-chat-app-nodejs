// external imports
const express = require("express")


// internal router
const { getLogin } = require("../controller/loginController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")


const router = express.Router()

// login page
router.get("/", decorateHtmlResponse("Login - chat app") ,getLogin)

module.exports = router