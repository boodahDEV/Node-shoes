const { Router } = require("express");
const router = Router();
const {
  renderIndex,
  renderNewEntries,
  createNewEntries
} = require("../controllers/entries.controler");

router.get("/", renderIndex);
router.get("/new-entry", renderNewEntries);
router.post("/new-entry", createNewEntries);

module.exports = router;
