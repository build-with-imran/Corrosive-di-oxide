const redBtn = document.getElementById("red");
const greenBtn = document.getElementById("green");
const blueBtn = document.getElementById("blue");

redBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

greenBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

blueBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});