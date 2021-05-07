(async function getProjects() {
    const response = await fetch("/api/projects");
    const result = await response.json();

    //When projects are retrieved from database, insert into locally used lists
    let projectIndex = 0
    result.projects.map(project => {

        projectIndex++

        const projectTitle = project.title
        const projectDescription = project.description
        const projectGitUrl = project.gitURL
        const projectImages = project.images
        const projectTechnologies = project.technologiesInvolved
        const projectParticipants = project.participants
        document.getElementById("project-title-" + projectIndex).innerText = projectTitle
        document.getElementById("project-description-" + projectIndex).innerText = projectDescription
        if (projectImages[0] === undefined) {
            document.getElementById("main-image-" + projectIndex).alt = "No images to display"
        } else {
            document.getElementById("main-image-" + projectIndex).src = projectImages[0]
        }
        
        document.getElementById("project-gitURL-" + projectIndex).href = projectGitUrl

        
        //Get UL of technologies used, then append all LIs
        const technologiesUL = document.getElementById("project-technologies-" + projectIndex)
        projectTechnologies.map(technology => {
            let LI = document.createElement("li")
            LI.innerText = technology
            technologiesUL.appendChild(LI)
        })

        const participantsUL = document.getElementById("project-group-participants-" + projectIndex)
        projectParticipants.map(participant => {
            let LI = document.createElement("li")
            LI.innerText = participant
            participantsUL.appendChild(LI)
        })
    


    });
})();



function doSomethingRepeatedly(e) {
    const hoveredContent = e.target.parentElement.children[1]
    hoveredContent.style.display = "block"
   
}

let intervalId;

$(document).ready(function () {

$('.project').hover(function (e) {
    let intervalDelay = 50;
    // call doSomethingRepeatedly() function repeatedly with 10ms delay between the function calls
    intervalId = setInterval(doSomethingRepeatedly(e), intervalDelay);
}, function (e) {
    // cancel calling doSomethingRepeatedly() function repeatedly
    let hoveredContent = e.target.parentElement
    
    while (hoveredContent.classList[0] !== "project") { //Checking if the mouse left the paragraph or any other section of a project. Would break before 
        hoveredContent = hoveredContent.parentElement   //if you didnt leave from header
    }

    hoveredContent = hoveredContent.children[1]
    hoveredContent.style.display = "none"
    clearInterval(intervalId);
});

});