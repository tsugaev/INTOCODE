const { Router } = require("express");
const { groupsController } = require("../controllers/groups.controller");

const router = Router();

router.post("/", groupsController.addGroup);
router.delete("/:id", groupsController.deleteGroup);
router.patch("/:id", groupsController.changeGroup);
router.get("/", groupsController.getAllGroups);
router.get("/week", groupsController.getAllGroupsByWeek);
router.get("/finished", groupsController.getFinishedGroups);
router.get("/:id/offerspercent", groupsController.getOffersPercent);

module.exports = router;
