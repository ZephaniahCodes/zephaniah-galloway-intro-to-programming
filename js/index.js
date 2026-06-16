//footer
const body = document.querySelector("body");
const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerHTML = "&#169; " + thisYear + " Zephaniah Galloway";
footer.appendChild(copyright);

// my skills
const skills = ["UX Design", "HTML", "CSS", "JavaScript", "Figma", "GitHub", "Data Analysis", "Digital Strategy"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
// Message Form
const messageForm = document.querySelector("form[name='leave_message']");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
});
// GitHub Repos
const projectsList = document.querySelector("#Projects ul");

fetch("https://api.github.com/users/ZephaniahCodes/repos")
    .then(function(response) {
        return response.json();
    })
    .then(function(repositories) {
        console.log(repositories);
        for (let i = 0; i < repositories.length; i++) {
            const li = document.createElement("li");
            li.innerText = repositories[i].name;
            projectsList.appendChild(li);
        }
    })
    .catch(function(error) {
        projectsList.innerHTML = "<li>Unable to load projects at this time.</li>";
        console.error(error);
    });