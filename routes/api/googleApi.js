const router = require("express").Router();
const TheGoogleController = require("../../controller/google");
// Matches with "/api/google"
router
  .route("/")
  .get(TheGoogleController.findAll);
module.exports = router;