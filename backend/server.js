const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');
const listRoutes = require('./routes/listRoutes');
const cors = require('cors');

dotenv.config(); 

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes); // Görev rotalarını bağla
app.use('/api/users', userRoutes);
app.use('/api/lists', listRoutes);

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
