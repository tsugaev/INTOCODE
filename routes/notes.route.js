const { Router } = require("express");
const { notesController } = require("../controllers/notes.controller");

const router = Router();

router.post("/", notesController.addNote);
router.patch("/:id", notesController.changeNote);
router.delete("/:id", notesController.deleteNote);
router.get("/students/:id", notesController.getAllNotesAboutStudent);
router.get("/:id", notesController.getNoteById);

module.exports = router;
