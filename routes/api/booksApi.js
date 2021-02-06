const router = require("express").Router();
const TheBookController = require("../../controller/book")
// Matches with "/api/books"
router.route("/")
  .get(TheBookController.findAll)
  .post(TheBookController.create);
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(TheBookController.findById)
  .put(TheBookController.update)
  .delete(TheBookController.remove);
module.exports = router;