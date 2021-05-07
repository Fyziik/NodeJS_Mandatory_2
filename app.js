const express = require("express")
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


const port = process.env.PORT || 8080

const projectsRouter = require("./routes/projects")
const contactRouter = require("./routes/contact")

app.use(projectsRouter.router)
app.use(contactRouter.router)

const fs = require("fs"); 

const htmlStart = fs.readFileSync(__dirname + "/public/html_components/start.html", 'utf-8')
const htmlEnd = fs.readFileSync(__dirname + "/public/html_components/end.html", 'utf-8')
const navbar = fs.readFileSync(__dirname + "/public/navbar/navbar.html", "utf-8")
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8")

const projects = fs.readFileSync(__dirname + "/public/projects/projects.html", 'utf-8')
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", 'utf-8')
const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", 'utf-8')
const skills = fs.readFileSync(__dirname + "/public/skills/skills.html", 'utf-8')
const schedule = fs.readFileSync(__dirname + "/public/schedule/schedule.html", 'utf-8')
const resume = fs.readFileSync(__dirname + "/public/resume/resume.html", 'utf-8')

app.get('/', (req, res) => {
    res.send(htmlStart + navbar + frontpage + footer + htmlEnd)
})

app.get('/skills' , (req, res) => {
    res.send(htmlStart + navbar + skills + footer + htmlEnd)
})

app.get('/projects', (req, res) => {
    res.send(htmlStart + navbar + projects + footer + htmlEnd)
})

app.get('/contact', (req, res) => {
    res.send(htmlStart + navbar + contact + footer + htmlEnd)
})

app.get('/schedule', (req, res) => {
    res.send(htmlStart + navbar + schedule + footer + htmlEnd)
})

app.get('/resume', (req, res) => {
    res.send(htmlStart + navbar + resume + footer + htmlEnd)
})



app.listen(port, (e) => {
    if (e) {
        console.log("Error occured")
    } else {
        console.log("Server running on port " + port)
    }
})