const mongoose = require('mongoose');
const time = require('../libs/timeLib');
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    taskId:{
        type:String,
        unique:true
    },
    task:{
        type:String,
        default:''
    },
    subTask:[{ 
        title: String, 
        subSubTask:[{
            title: String
        }]
    }],
    status:{
        type:String,
        default:'Open'
    },
    dueDate:{
        type:String,
        default:''
    },
    
    priority:{
        type:String,
        default:''
    },
    friends:[{
        firstName:String,
        lastName:String,
        emailId:String,
    }],
    email:{
        type:String,
        default:''
    },
    submitterFirstName:{
        type:String,
        default:''
    },
    submitterLastName:{
        type:String,
        default:''
    },
    editorFirstName:{
        type:String,
        default:''
    },
    editorLastName:{
        type:String,
        default:''
    },
    created:{
        type:String,
        default:time.standardFormat()
    },
    lastModified:{
        type:String,
        default:time.standardFormat()
    }
     
});


module.exports = mongoose.model('Task',taskSchema);