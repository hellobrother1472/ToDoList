const bodyParser = require("body-parser");
const express = require("express");
const tasks = [];
const works = [];

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const date = require(__dirname+"/date.js");
app.set('view engine', 'ejs');  // Necessary line to use EJS
app.use(express.static('public'));


app.get("/", (req, res) => {
    
    const day = date.day();

    res.render("index", {
        listTitle: day,
        newTasks: tasks
    });

})

app.get("/work", (req, res) => {
    res.render("index", {
        listTitle: "Work",
        newTasks: works
    });
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.post("/", (req, res) => {
    if (req.body.list === "Work") {
        let work = req.body.inputTask;
        works.push(work);
        res.redirect("/work")
    } else {
        let task = req.body.inputTask;
        tasks.push(task);
        res.redirect("/");
    }
})



app.listen(process.env.PORT || 3000, () => {
    console.log("Port is up and running on port 3000.");
})

