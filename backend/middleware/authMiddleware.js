const express = require('express');
const router = express.Router();
const { getLists, createList, addTaskToList, deleteList } = require('../controllers/listController');

// Liste rotaları
router.route('/')
  .get(getLists)  // Oturum açma gerekmeden listeleri getirir
  .post(createList);  // Oturum açma gerekmeden yeni liste oluşturur

router.route('/:id')
  .post(addTaskToList)  // Görev ekleme rotası
  .delete(deleteList);  // Liste silme rotası

module.exports = router;