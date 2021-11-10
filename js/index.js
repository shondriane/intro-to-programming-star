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
  "Project Management",
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
const messageForm = document.querySelector("[id='messageForm']");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name, email, message);

  // Display Messages in List
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href=“mailto:${email}”>${name}</a>
            <span id ="spanMessage"> wrote: ${message}</span>`;
  
  
  // Add remove button to each message
  let removeButton = document.createElement("button");
  removeButton.innerHTML = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (e) => {
    let entry = e.target.parentNode;
    entry.remove();
  });

  // Adding the remove button and message to messageList
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});
