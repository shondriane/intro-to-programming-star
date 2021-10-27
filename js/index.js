//date for footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerText = "Shondriane Mesa-Wise " + thisYear;
footer.appendChild(copyright);

//list of new skillset
const skills = [
  "Growth Mindset",
  "Problem Solving",
  "Building Relationships",
  "JavaScript",
  "Git",
  "CSS",
  "HTML",
];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector(".skills-list");
// forloop to add new skillset
for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skill.classList.add("list-item");
  skillsList.appendChild(skill);
}
