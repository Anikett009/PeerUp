const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema(
    {
        //basic details
        name: {
            type: String,
            required: true,
            tolowercase: true
        },
        uid:{
            type:String,
            unique:true,
            required : true
        },
        yearOfJoin: {
            type: Number,
            required: true,
        },
        department: {
            type: String,
            required: true,
            tolowercase: true
        },
        subjects: {
            type: [String],
            required: true,
            tolowercase: true
        },
        goals: {
            type: [String],
            required: true,
            tolowercase: true
        },
        academicIntrest: {
            type: [String],
            required: true,
            tolowercase: true
        },
    },
    {
        timestamps: true
    }
)
const Student = mongoose.model('student',studentSchema)
module.exports=Student