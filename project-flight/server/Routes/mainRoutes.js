const router = require("express").Router()
const Flight = require("./flights")
require("dotenv").config()

router.use("/flight", Flight)

// error handler
router.use((err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg;
    if (err.stack) errorObj.stack = err.stack;
    if (!Object.keys(errorObj).length) {
        return res.status(err.status ?? 500).send("error")
    }
    res.status(err.status ?? 500).json(errorObj)
})


module.exports = router;