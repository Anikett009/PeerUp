const Student = require("../Models/student.model")

const postStudentInfo = async (req, res) => {
    try {
        const { fname,lname, uid, yearOfJoin, department, subjects, goals, academicIntrest} = req.body
    
        const studentInfo = [fname,lname, uid, yearOfJoin, department, subjects, goals, academicIntrest]
    
        if(studentInfo.some((value) => value === "")) {
            return res.status(400).json({ error: "All fields are required" })
        }
    
        const student = await Student.create({
            fname,lname, uid, yearOfJoin, department, subjects, goals, academicIntrest
        })
    
        if(!student) {
            res.status(500).json({ error: "Something went wrong while uploading the student information" })
        }
    
        res.status(200).json({ message: `Basic details of ${student.fname} uploaded sucessfully` })
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