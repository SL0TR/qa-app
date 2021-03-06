const router = require("express").Router();
const controller = require("./questionController");

router.route("/").get(controller.get);
router.route("/").post(controller.post);
router.param('id', controller.params);
router.route('/:id').get(controller.getOne)
router.route('/:id').delete(controller.deleteOne)
// router.param('id', controller.params);
// router.route('/:id').get(controller.getOne)
      // .put(checkUser, controller.put)
      // .delete(checkUser, controller.delete)
module.exports = router;
