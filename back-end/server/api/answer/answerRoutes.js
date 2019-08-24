const router = require("express").Router();
const controller = require("./answerController");

router.route("/").get(controller.get);
router.route("/").post(controller.post);
router.route("/useranswer").post(controller.userAnswer);
// router.param('id', controller.params);
// router.route('/:id').get(controller.getOne)
      // .put(checkUser, controller.put)
      // .delete(checkUser, controller.delete)
module.exports = router;
