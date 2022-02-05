const { Router } = require("express");

const router = Router();

router.use("/students", require("./students.route"));
router.use("/groups", require("./groups.route"));
router.use("/notes", require("./notes.route"));

module.exports = router;
