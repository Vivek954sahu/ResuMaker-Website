const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const resumeRoutes = require('./routes/resumeRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', resumeRoutes);

mongoose.connect('mongodb://localhost:27017/resume-builder', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.get('/', (req,res) => {
    res.send('Backend is running');
});

app.listen(5000, () => console.log('Server is running on port 5000'));