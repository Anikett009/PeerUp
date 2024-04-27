const Student = require("../Models/student.model")

const postStudentInfo = async (req, res) => {
    try {
        const { name, uid, yearOfJoin, department, subjects, goals, academicIntrest} = req.body
    
        const studentInfo = [name, uid, yearOfJoin, department, subjects, goals, academicIntrest]
    
        if(studentInfo.some((value) => value === "")) {
            return res.status(400).json({ error: "All fields are required" })
        }
    
        const student = await Student.create({
            name, uid, yearOfJoin, department, subjects, goals, academicIntrest
        })
    
        if(!student) {
            res.status(500).json({ error: "Something went wrong while uploading the student information" })
        }
    
        res.status(200).json({ message: `Basic details of ${student.name} uploaded sucessfully` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Internal server error" })
    }
}

const getStudentInfo = async (req, res) => {
    res.status(200).json({message:"Students here"})
}

module.exports = {
    postStudentInfo,
    getStudentInfo
}