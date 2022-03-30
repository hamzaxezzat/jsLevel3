
// Toggale the Light and dark mode
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});}


// When Hover on : Header => Change Color 
{const hiddenul = document.querySelector(".hiddenul");
const changecolor = document.querySelector("#changecolor");

changecolor.addEventListener('mousemove', (eo) =>{
  hiddenul.style.display = "block";
});
changecolor.addEventListener('mouseout', (eo) =>{
  hiddenul.style.display = "none";
});}

