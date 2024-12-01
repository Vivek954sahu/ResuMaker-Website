const express = require('express');
const router = express.Router();
const Resume = require('../models/resumeModel');

router.post('/save', async (req,res) =>{
    const resume = new Resume(req.body);
    await resume.save();
    res.json({ message: 'Resume saved!'});
});

module.exports = router;