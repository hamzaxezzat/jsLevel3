// Default Onload

const slideImgArr = [
  `<img src="img/slider/1.png" alt="Slide1" />`,
  `<img src="img/slider/2.png" alt="Slide1" />`,
  `<img src="img/slider/3.png" alt="Slide1" />`,
  `<img src="img/slider/4.png" alt="Slide1" />`,
  `<img src="img/slider/5.png" alt="Slide1" />`,
];
let i = 0;
slideImg.innerHTML += slideImgArr[i];
prev.setAttribute("disabled", "disabled");

// Add and remove slideActive class from numbers
const addActiveClass = (eo) => {
  eo.target.parentElement
    .getElementsByClassName("slideActive")[0]
    .classList.remove("slideActive");
};
const removeActiveClass = (eo) => {
  eo.target.parentElement
    .getElementsByClassName("slideNumbtn")
    [i].classList.add("slideActive");
};

// Press in next
next.addEventListener("click", (eo) => {
  i++;
  slideImg.innerHTML += slideImgArr[i];
  slideImgNumber.innerText = `Slide ${i + 1} of ${slideImgArr.length}`;
  prev.removeAttribute("disabled");
  if (i + 1 == slideImgArr.length) {
    next.setAttribute("disabled", "disabled");
  }
  // Add and remove slideActive class from numbers
  addActiveClass(eo);
  removeActiveClass(eo);
});

// item.parentElement
// .getElementsByClassName("slideActive")[0]
// .classList.remove("slideActive");
// item.classList.add("slideActive");

// Press in Prev
prev.addEventListener("click", (eo) => {
  i--;
  slideImg.innerHTML += slideImgArr[i];
  slideImgNumber.innerText = `Slide ${i + 1} of ${slideImgArr.length}`;
  next.removeAttribute("disabled");

  if (i == 0) {
    prev.setAttribute("disabled", "");
  }
  // Add and remove slideActive class from numbers
  addActiveClass(eo);
  removeActiveClass(eo);
});

// slide Active Numbers
const slideNumbtn = document.querySelectorAll(".slideNumbtn");
slideNumbtn.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    item.parentElement
      .getElementsByClassName("slideActive")[0]
      .classList.remove("slideActive");
    item.classList.add("slideActive");
    slideImgNumber.innerText = `Slide ${index + 1} of ${slideImgArr.length}`;
    slideImg.innerHTML += slideImgArr[index];
    i = index;

    // add and remoce disabled attribute from prev & next buttons
    if (index >= slideImgArr.length - 1) {
      next.setAttribute("disabled", "");
      prev.removeAttribute("disabled");
    } else if (index == 0) {
      prev.setAttribute("disabled", "");
      next.removeAttribute("disabled");
    } else {
      next.removeAttribute("disabled");
      prev.removeAttribute("disabled");
    }
  });
});
