const btnRandomE = document.querySelector(".btnRandomE");
// const heart = document.querySelector(".heart");
const emojisParent = document.querySelector(".emojisParent");
console.log(`${Math.random()*100}%`);
const fall = btnRandomE.addEventListener("click",eo=>{
  
  const fallInterval = setInterval(() => {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#128157;";

    heart.style.left  = `${Math.random() * 100 }%`;
    emojisParent.append(heart);},50);

    setTimeout(() => {
      clearInterval(fallInterval);
    }, 3000);
    setTimeout(() => {
      emojisParent.innerText = "";
    }, 5000);
  });
