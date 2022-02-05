const Note = require("../models/Note.model");
const Student = require("../models/Student.model");

module.exports.notesController = {
  // Создание замтеки +++
  addNote: async (req, res) => {
    try {
      const { student, text } = req.body;
      const note = await Note.create({
        student,
        text,
      });

      await Student.findByIdAndUpdate(req.body.student, {
        $push: { notes: note },
      });
      res.json("Заметка создана");
    } catch (err) {
      res.json("Ошибка при создании заметки");
    }
  },

  // Изменение заметки +++
  changeNote: async (req, res) => {
    try {
      const { student, text } = req.body;
      await Note.findByIdAndUpdate(req.params.id, {
        student,
        text,
      });
      res.json("Заметка изменена");
    } catch (err) {
      res.json("Ошибка при изменении заметки");
    }
  },

  // Удаление заметки +++
  deleteNote: async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.json("Заметка удалена");
    } catch (err) {
      res.json("Ошибка при удалении заметки");
    }
  },

  // вывод всех заметок определенного студента +++
  getAllNotesAboutStudent: async (req, res) => {
    try {
      const notes = await Note.find({ student: req.params.id });
      res.json(notes);
    } catch (err) {
      res.json("Ошибка при выводе заметок");
    }
  },

  // Вывод заметки по ID +++
  getNoteById: async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.json(note);
    } catch (err) {
      res.json("Ошибка при выводе заметки по ID");
    }
  },
};
