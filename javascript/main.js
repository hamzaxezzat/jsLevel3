// Toggale the Light and dark mode
{
  const dark = document.getElementById("dark");
  const body = document.getElementById("body");

  dark.addEventListener("click", (eo) => {
    body.classList.toggle("dark");
  });
}

/*
// =============== Advanced Selectors ===============
document.querySelectorAll("h1:not(body > header > h1 )");
document.querySelectorAll("h1:not(body > header > h1 )");
// Copy Selector from Inspect Element
*/
