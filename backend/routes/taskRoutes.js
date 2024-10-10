const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController');
const router = express.Router();

// Tüm görevleri listeleme
router.route('/').get(getTasks);

// Yeni görev oluşturma
router.route('/').post(createTask);

module.exports = router;