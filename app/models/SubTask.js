const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subTaskSchema = new  Schema({
    title:String,
    subSubTask:[{ 
        type: Schema.Types.ObjectId, 
        ref: 'SubSubTask'
    }]
})
module.exports = mongoose.model('SubTask',subTaskSchema);