const List = require('../models/listModel');

// Liste oluşturma
const createList = async (req, res) => {
  try {
    const { name } = req.body;
    const {describtion} = req.body;

    const list = new List({
      name,
      describtion,
    });

    const createdList = await list.save();
    res.status(201).json(createdList);
  } catch (error) {
    res.status(400).json({ message: 'Liste oluşturulamadı', error: error.message });
  }
};

// Tüm listeleri getirme
const getLists = async (req, res) => {
  try {

    const lists = await List.find(); 
    console.log(lists);
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: 'Listeler alınamadı', error: error.message });
  }
};

// Listeye görev ekleme
const addTaskToList = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  try {
    const list = await List.findById(id);

    if (!list) {  
      return res.status(404).json({ message: 'Liste bulunamadı' });
    }

    list.tasks.push(task);  // Görev listeye ekleniyor
    const updatedList = await list.save();

    res.json(updatedList);
  } catch (error) {
    res.status(500).json({ message: 'Görev eklenemedi', error: error.message });
  }
};

// Liste silme
const deleteList = async (req, res) => {
  const { id } = req.params;

  try {
    const list = await List.findById(id);

    if (!list) {
      return res.status(404).json({ message: 'Liste bulunamadı' });
    }

    await list.remove();
    res.json({ message: 'Liste silindi' });
  } catch (error) {
    res.status(500).json({ message: 'Liste silinemedi', error: error.message });
  }
};

module.exports = {
  createList,
  getLists,
  addTaskToList,
  deleteList,
};
