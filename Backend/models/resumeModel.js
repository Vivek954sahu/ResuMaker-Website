const mongoose = require('mongoose');
const resumeSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    summary:String,
    skills:String,
    education:String,
    experience:String,
    projects:String,
    Achievements:String,
});

module.exports = mongoose.model('Resume',resumeSchema);