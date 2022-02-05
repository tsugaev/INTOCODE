const Group = require("../models/Group.model");

module.exports.groupsController = {
  // Добавление группы +++
  addGroup: async (req, res) => {
    try {
      const { name, week, finished } = req.body;
      await Group.create({
        name,
        week,
        finished,
      });
      res.json("Группа создана");
    } catch (err) {
      res.json("Ошибка при создании группы");
    }
  },

  // Удаление группы +++
  deleteGroup: async (req, res) => {
    try {
      await Group.findByIdAndDelete(req.params.id);
      res.json("Группа удалена");
    } catch (err) {
      res.json("Ошибка при удалении группы");
    }
  },

  // Изменение группы +++
  changeGroup: async (req, res) => {
    try {
      const { name, week, finished } = req.body;
      await Group.findByIdAndUpdate(req.params.id, {
        name,
        week,
        finished,
      });
      res.json("Группа изменена");
    } catch (err) {
      res.json("Ошибка при изменении группы");
    }
  },

  // Вывод всех групп +++
  getAllGroups: async (req, res) => {
    try {
      const groups = await Group.find();
      res.json(groups);
    } catch (err) {
      res.json("Ошибка при выводе всех групп");
    }
  },

  // Вывод всех групп на определенной неделе +++
  getAllGroupsByWeek: async (req, res) => {
    try {
      const groups = await Group.find({ week: req.body.num });
      res.json(groups);
    } catch (err) {
      res.json(`Ошибка при выводе групп, обучающихся на ${num} неделе`);
    }
  },

  // Вывод групп, закончивших обучение +++
  getFinishedGroups: async (req, res) => {
    try {
      const groups = await Group.find({ finished: true });
      res.json(groups);
    } catch (err) {
      res.json(`Ошибка при выводе групп закончивших обучение`);
    }
  },

  // Подсчет процента офферов из определенной группы +++
  getOffersPercent: async (req, res) => {
    try {
      const group = await Group.findById(req.params.id).populate("students");
      const students = group.students;

      const gotOffer = students.filter(
        (item) => item.status === "Получил оффер"
      );

      const result = (gotOffer.length / students.length) * 100;
      res.json(`Из группы ${group.name} ${result}% студентов получили оффер`);
    } catch (err) {
      res.json(
        "Ошибка при подсчете процента, получивших оффер из определенной группы"
      );
    }
  },
};
