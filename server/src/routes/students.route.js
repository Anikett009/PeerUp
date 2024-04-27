const express = require("express")
const { postStudentInfo, getStudentInfo } = require("../controllers/student.controller")

const router = express.Router()

router.route('/')
.post(postStudentInfo)
.get(getStudentInfo)

module.exports = router