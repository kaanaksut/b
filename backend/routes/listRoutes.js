const express = require('express');
const { getLists, createList } = require('../controllers/listController');
const router = express.Router();

// List routes
router.route('/')
  .get(getLists)  // Token doğrulaması olmadan istek yapılacak
  .post(createList);  // Liste oluşturma

module.exports = router;
