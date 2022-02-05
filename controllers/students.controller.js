const Group = require("../models/Group.model");
const Student = require("../models/Student.model");

module.exports.studentsController = {
  // Добавление студента +++
  addStudent: async (req, res) => {
    try {
      const { name, status, group, paid } = req.body;
      const student = await Student.create({
        name,
        status,
        group,
        paid,
      });

      await Group.findByIdAndUpdate(req.body.group, {
        $push: { students: student },
      });
      res.json("Студент добавлен");
    } catch (err) {
      res.json("Ошибка при добавлении стдента");
    }
  },

  // Удаление студента +++
  delteStudent: async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.json("Студент удален");
    } catch (err) {
      res.json("Ошибка при удалении студента");
    }
  },

  // вывод студента по ID +++
  getStudentById: async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).populate(
        "notes",
        "text"
      );
      res.json(student);
    } catch (err) {
      res.json("Ошибка при выводе студента по ID");
    }
  },

  // Вывод всех студентов +++
  getAllStudents: async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.json("Ошибка при получении всех студентов");
    }
  },

  // Вывод всех студентов из определенной группы +++
  getAllGroupStudents: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов из определенной группы");
    }
  },

  // Вывод студентов, которые еще не внесли оплату
  getStudentsNotPaid: async (req, res) => {
    try {
      const students = await Student.find({ paid: 0 });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов, которые еще не внесли оплату");
    }
  },

  // Вывод студентов, кт=оторые внесли 50% +++
  getStudentsPaidHalf: async (req, res) => {
    try {
      const students = await Student.find({ paid: 50 });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов, которые внесли 50%");
    }
  },

  // Вывод студентов с полной оплатой
  getStudentsPaidFull: async (req, res) => {
    try {
      const students = await Student.find({ paid: 100 });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов с полной оплатой");
    }
  },

  // Вывод всех учащихся студентов +++
  getStudyingStudents: async (req, res) => {
    try {
      const students = await Student.find({ status: "В процессе обучения" });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе, учащихся студентов");
    }
  },

  // Вывод студентов, которые ищут работу +++
  getSearchingJobStudents: async (req, res) => {
    try {
      const students = await Student.find({ status: "Ищет работу" });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов, которые ищут работу");
    }
  },

  // Вывод студентов, получивших оффер +++
  getStudentsGotOffer: async (req, res) => {
    try {
      const students = await Student.find({ status: "Получил оффер" });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов, получивших оффер");
    }
  },

  // Вывод работающих студентов +++
  getWorkingStudents: async (req, res) => {
    try {
      const students = await Student.find({ status: "Вышел на работу" });
      res.json(students);
    } catch (err) {
      res.json("Ошибка при выводе студентов, работающих студентов");
    }
  },
};
