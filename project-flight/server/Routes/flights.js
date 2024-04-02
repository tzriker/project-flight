const router = require("express").Router()
const newflight = require("../controller/FlightControl")

router.post("/addflight", newflight)


module.exports = router;