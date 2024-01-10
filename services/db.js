// Node + mongoDB connection
//1. import mongoose
const mongoose = require('mongoose')

// Connection string
mongoose.connect('mongodb://localhost:27017/EMS')

// create a model
const employee = mongoose.model('employee', {  // model , schema , model is the collection in mongodb,scheme is the document in collection
    id:String,
    name:String,
    age:String,
    designation:String,
    salary:String
})

module.exports={       // this is to export the collection so we can use the collection everywhere
    employee
}