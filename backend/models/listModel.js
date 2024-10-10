const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  describtion:{
     type: String,
     required: true,  // Açıklama zorunlu
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Kullanıcı ID'si zorunlu
  },
  tasks: [
    {
      type: String,  // Görevleri basit string olarak tutuyoruz
    }
  ]
}, {
  timestamps: true,  // Zaman damgaları (createdAt ve updatedAt) eklenir
});

const List = mongoose.model('List', listSchema);

module.exports = List;
