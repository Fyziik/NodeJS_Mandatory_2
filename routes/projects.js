const router = require("express").Router()

const projects = [
    {
        title: "Nodefolio",
        description: "Created a personal portfolio with Node.js",
        gitURL: "https://github.com/anderslatif/Kea_DAT_Node_2021_SPRING.git/1/5._Nodefolio",
        images: ["/projects/imgs/project_1/apple.png"],
        technologiesInvolved: ["Node.js", "Html", "CSS"],
        participants: ["Anders", "Students of the class"]
    }, 
    {
        title: "Carwash",
        description: "Had to make a text based car wash system with Java during the 1st semester at KEA",
        gitURL: "https://github.com/Fyziik",
        images: [],
        technologiesInvolved: ["Java"],
        participants: ["Andreas Møller Laursen", "Carl Philip Mulvad", "Emil Gynther Christensen", "Morten Eiby"]
    },
    {
        title: "Project 3",
        description: "PLACEHOLDER",
        gitURL: "https://github.com/Fyziik",
        images: ["https://github.com/Fyziik/Webshop-Exercise/blob/master/src/main/resources/static/images/apple.png"],
        technologiesInvolved: ["Nothing"],
        participants: []
    },
    {
        title: "Project 4",
        description: "PLACEHOLDER",
        gitURL: "https://github.com/Fyziik",
        images: ["https://github.com/Fyziik/Webshop-Exercise/blob/master/src/main/resources/static/images/apple.png"],
        technologiesInvolved: ["Nothing"],
        participants: []
    }
]

router.get('/api/projects', (req, res) => {
    res.send({ projects })
})

module.exports = {
    router
}