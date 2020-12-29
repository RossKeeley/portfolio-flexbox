
var skills = ["HTML", "CSS", "JavaScript"];

// var btn = document.createElement("button");
// document.getElementById('skills-card').appendChild(btn).innerHTML = "HI";

skills.forEach((i) => {
  var btn = document.createElement("button");

  document.getElementById('skills-card').appendChild(btn).innerHTML = i;
});
