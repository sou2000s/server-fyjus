const express = require("express");
const app = express();
const cors = require("cors")
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require("./data/course.json");
const categories = require('./data/category.json')

app.get('/' , (req, res)=> {
    res.send(courses);
})

// app.get("/course/:id" , (req , res)=>{
//     const id = req.params.id;
//     const selectCourse = courses.find(course => course.id === id)
//     res.send(selectCourse);
// })

app.get("/categories" , (req, res)=> {
    res.send(categories)
})

app.get("/category/:id" , (req, res)=> {
    const id = req.params.id;
    const selectCategory = courses.filter(course => course.categoryId === id);
    res.send(selectCategory);
})

app.get("/course/:id" , (req, res)=> {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.courseId === id)
    res.send(selectedCourse);
})


app.listen(port , ()=>{
    console.log("server running in port " , port);
})
