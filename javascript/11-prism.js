const copyBtns = document.querySelectorAll(".copyBtn");

copyBtns.forEach((item) => {
  item.addEventListener("click", (eo) => {
    navigator.clipboard.writeText(
      item.parentElement.nextElementSibling.innerText
    );
    item.innerText = "Copied!";
    setTimeout(() => {
      item.innerText = "Copy";
    }, 1000);
  });
});
