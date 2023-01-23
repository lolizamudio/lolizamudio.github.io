var button = document.querySelector("button");

button.addEventListener("click", function () {
  const curColour = document.body.style.backgroundColor;

  if (curColour === "rgb(252, 98, 150)") {
    document.body.style.backgroundColor = "rgba(10, 10, 10, 0.849)";
  } else {
    document.body.style.backgroundColor = "rgb(252, 98, 150)";
  }
});
