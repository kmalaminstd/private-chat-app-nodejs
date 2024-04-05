const express = require("express")
const {getInbox} = require("../controller/inboxController")
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse")

const router = express.Router()

router.get("/", decorateHtmlResponse("Messages") ,getInbox)

module.exports = router