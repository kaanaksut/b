const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    default: 'Not Started',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
  },
  startDate: {
    type: Date,  // Görevlerin başlangıç tarihi
    default: Date.now, // Varsayılan olarak oluşturulduğu anki tarih
  },
  dueDate: {
    type: Date,  // Görevlerin teslim tarihi
  },
  priority: {
    type: String,
    enum: ['Low', 'Normal', 'High'],  // Sadece bu değerler kabul edilir
    default: 'Normal',
  },
}, {
  timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
