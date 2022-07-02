const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        name:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

    timestamps:true
})

exports= mongoose.model("Todo", todoSchema)