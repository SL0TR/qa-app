const router = require("express").Router();

router.use("/users", require("./user/userRoute"));
router.use("/questions", require("./question/questionRoute"));
router.use("/answers", require("./answer/answerRoutes"));

module.exports = router;
