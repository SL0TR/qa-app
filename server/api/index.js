const router = require("express").Router();

router.use("/user", require("./user/userRoute"));

module.exports = router;
