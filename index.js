const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/course.json");
const courseDetails = require("./data/courseDetails.json");


app.get('/' , (req, res)=> {
    res.send(courses);
})

app.get("/course/:id" , (req , res)=>{
    const id = req.params.id;
    const selectCourse = courseDetails.find(course => course.id == id)
    res.send(selectCourse);
})

app.listen(port , ()=>{
    console.log("server running in port " , port);
})
