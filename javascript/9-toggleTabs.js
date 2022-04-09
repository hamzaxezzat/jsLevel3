const tBtn = document.querySelectorAll(".tBtn");
const tContent = document.querySelectorAll(".tContent");
console.log(tBtn);

tBtn.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    item.parentElement.querySelector(".o1").classList.remove("o1");
    item.classList.add("o1");
    tContent[index].parentElement
      .querySelector(".activeContent")
      .classList.remove("activeContent");
    tContent[index].classList.add("activeContent");
  });
});
