const router = require("express").Router();
const controller = require('./controller');

// before we send back a jwt, lets check
// the password and username match what is in the DB
router.post('/auth', controller.signin);

module.exports = router;