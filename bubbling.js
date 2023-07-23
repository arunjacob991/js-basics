let container = document.getElementById("container");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("button");

container.addEventListener("click", () => {
  console.log("container clicked");
});
paragraph.addEventListener("click", () => {
  console.log("paragraph clicked");
});
button.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("button clicked");
});
