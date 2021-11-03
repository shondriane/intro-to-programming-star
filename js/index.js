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
const messageForm = document.getElementById("messageForm");

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  console.log(name);
  var email = document.getElementById("e-mail").value;
  console.log(email);
  var message = document.getElementById("message").value;
  console.log(message);

  var messageSection = document.querySelector("#messages");
  var messageList = messageSection.querySelector("ul");
  var newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href=mailto:${email}>${name}</a><span> wrote: ${message} </span>`;

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    let entry = removeButton.ParentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  document.getElementById("messageForm").reset();
});
