const { Router } = require("express");
const { studentsController } = require("../controllers/students.controller");

const router = Router();

router.post("/", studentsController.addStudent);
router.delete("/byid/:id", studentsController.delteStudent);
router.get("/byid/:id", studentsController.getStudentById);
router.get("/", studentsController.getAllStudents);
router.get("/groups/:id", studentsController.getAllGroupStudents);
router.get("/notpaid", studentsController.getStudentsNotPaid);
router.get("/paidhalf", studentsController.getStudentsPaidHalf);
router.get("/paidfull", studentsController.getStudentsPaidFull);
router.get("/studying", studentsController.getStudyingStudents);
router.get("/searching", studentsController.getSearchingJobStudents);
router.get("/gotoffer", studentsController.getStudentsGotOffer);
router.get("/working", studentsController.getWorkingStudents);

module.exports = router;
