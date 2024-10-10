const Task = require('../models/taskModel');

// Tüm görevleri listeleme
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();  // Veritabanındaki tüm görevleri çekiyoruz
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Görevler alınamadı', error: error.message });
  }
};

// Yeni görev oluşturma
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      title,
      description,
    });
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    res.status(400).json({ message: 'Görev oluşturulamadı', error: error.message });
  }
};

module.exports = {
  getTasks,
  createTask,
};
