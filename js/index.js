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