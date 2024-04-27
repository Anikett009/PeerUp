const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser") // Corrected typo here

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser()) // Corrected middleware name

// Routes import
const studentRoute = require("./routes/students.route")

// Routes declaration
app.use("/api/v1/student", studentRoute)

module.exports = app
