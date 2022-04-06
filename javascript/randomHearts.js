const btnRandomE = document.querySelector(".btnRandomE");
const emojisParent = document.querySelector(".emojisParent");

const fallHearts = ()=>{
  const fallInterval = setInterval(() => {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#128156;";
    heart.style.left  = `${Math.random() * 100 }%`;
    heart.style.animationDuration = `${(Math.random()+.5)*1.5}s`;

    const heart2 = document.createElement("div");
    heart2.classList.add("heart");
    heart2.innerHTML = "&#128150;";
    heart2.style.left  = `${Math.random() * 100 }%`;
    heart2.style.animationDuration = `${(Math.random()+.5)*1.5}s`;

    emojisParent.append(heart);
    emojisParent.append(heart2)
    }
    ,50);
    // Stop after 3s
    setTimeout(() => {
      clearInterval(fallInterval);
    }, 1000);
    // clear the div after 5s
    setTimeout(() => {
      emojisParent.innerText = "";
    }, 3000);
}
btnRandomE.addEventListener("click",eo=>{fallHearts()});
