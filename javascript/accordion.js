const plus = document.querySelectorAll(".plus");
// const answer = document.querySelector("#main > section > div > div > p");

plus.forEach((item) => {
  item.addEventListener("click", (eo) => {
    const answer =
      eo.target.parentElement.parentElement.getElementsByClassName("answer")[0];
    answer.classList.toggle("activeAnswer");
    if (answer.classList.contains("activeAnswer")) {
      answer.style.height = `${answer.scrollHeight}px`;
      eo.target.innerText = "-";
    } else {
      answer.style.height = "0";
      eo.target.innerText = "+";
    }
  });
});
