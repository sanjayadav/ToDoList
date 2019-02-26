const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subSubTaskSchema = new  Schema({
    title:String
})
module.exports = mongoose.model('SubSubTask',subSubTaskSchema);