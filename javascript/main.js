 
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



// Change Header BG Color
const header = document.getElementsByTagName("header")[0];
const h1Title= document.querySelector("body > header > h1")
headerbg.addEventListener("click",(eo)=>{
  const random = Math.round(Math.random() *360);
  header.style.backgroundColor = `hsl(${random}, 50%,50%)`;
  h1Title.style.backgroundColor = `hsl(${random}, 50%,50%)`;
  h1Title.style.backgroundColor = `hsl(${random}, 50%,50%)`;
  dark.style.backgroundColor = `hsl(${random}, 80%,50%)`;
})
/*
// =============== Advanced Selectors ===============
document.querySelectorAll("h1:not(body > header > h1 )");
document.querySelectorAll("h1:not(body > header > h1 )");
// Copy Selector from Inspect Element
*/