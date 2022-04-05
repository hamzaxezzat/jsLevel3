 
// Toggale the Light and dark mode
{const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
});}


// When Hover on : Header => Change Color 
{const hiddenul = document.querySelector(".hiddenul");
const changeColor = document.querySelector("#changecolor");

changecolor.addEventListener('mousemove', (eo) =>{
  hiddenul.style.display = "block";
});
changecolor.addEventListener('mouseout', (eo) =>{
  hiddenul.style.display = "none";
});}



// Change Header BG Color
{
{const header = document.getElementsByTagName("header")[0];
const h1Title= document.querySelector("body > header > h1")
headerbg.addEventListener("click",(eo)=>{
  const random = Math.round(Math.random() *360);
  header.style.backgroundColor = `hsl(${random}, 50%,50%)`;
  h1Title.style.backgroundColor = `hsl(${random}, 50%,50%)`;
  dark.style.backgroundColor = `hsl(${random}, 80%,50%)`;
})}}

// Change Title BG Color | by forEach
const h1Array = document.querySelectorAll("h1:not(body > header > h1)");
titlebg.addEventListener("click",(eo)=>{
  const random = Math.round(Math.random()*360);
  h1Array.forEach(item => {
    item.style.backgroundColor = `hsl(${random},50%,50%)`
  });
})



// Change Title Color | by random function
const random = ()=>{return Math.round(Math.random()*360);}

// titlecolor.addEventListener("click",eo=>{
//   // const random = Math.round(Math.random()*360);
//   h1Array.forEach(item=>{
//     item.style.color = `hsl(${random()},50%,50%)`;
//   })
// })}
// ============ OR ============
// Change Title Color | by for loop
// titlecolor.addEventListener("click",eo=>{
  
//   for(let i=0 ; i< h1Array.length ; i++){
//     const item = h1Array[i]
//     item.style.color = `hsl(${random()},50%,50%)`;
//   }
// ============ OR ============
// Change Title Color | by for in (get index)
// titlecolor.addEventListener("click",eo=>{
//   for(const i in h1Array){
//     const item = h1Array[i];
//     item.style.color = `hsl(${random()},50%,50%)`;
//     }
//   }
// )
// ============ OR ============
// Change Title Color | by for of (get the element itself ! not index)
// titlecolor.addEventListener("click",eo=>{
//   for(const item of h1Array){
//     item.style.color = `hsl(${random()},50%,50%)`;
//     }
//   }
// )
// ============ OR ============
// Change Title Color | by while
titlecolor.addEventListener("click",eo=>{
  let i = 0;
  while (i < h1Array.length){
    let item = h1Array[i];
    item.style.color = `hsl(${random()},50%,50%)`;
    i++
  }
  }
)
// ============ OR ============
// Change Title Color | by Do while
titlecolor.addEventListener("click",eo=>{
  let i = 0;
do {
  let item = h1Array[i];
  item.style.color = `hsl(${random()},50%,50%)`;
  i++
} while (i < h1Array.length);
  }
)
// ============ OR ============
// Change Title Color | by for if
titlecolor.addEventListener("click",eo=>{
  let i = 0;
  for (;;){
    if(i < h1Array.length){
      let item = h1Array[i];
      item.style.color = `hsl(${random()},50%,50%)`;
      i++
    }else{break}
  }
})



// Change Section Color | by full function
{
const section = document.getElementsByTagName("section"); // Call HTMLCollection
const sectionArray = Array.from(section); // Convert HTMLCollection to Array
const sectionColor = ()=>{
  const random = Math.round(Math.random()*360);
  return sectionArray.forEach(item =>{
    item.style.backgroundColor = `hsl(${random},50%,50%)`;
  })
}
sectionbg.addEventListener("click",(sectionColor));
}

// Change SectionNew Color | by Specific Colors and loop
const arrColors = ["#C48791","#8aded0","#0AE0C9"]
let i = 0;
sectionNewbg.addEventListener("click",(eo)=>{
  const sectionNew = document.querySelectorAll(".sectionNew");
  sectionNew.forEach(item=>{
      item.style.backgroundColor = arrColors[i] ;
    })
    i == (arrColors.length -1)? i = 0 : i++ 
})


// Change Sticky BG Color | by Specific Colors random
const sticky = document.getElementsByClassName("sticky")[0];
stickybg.addEventListener("click",(eo)=>{
  const random = Math.floor(Math.random() * arrColors.length )
  sticky.style.backgroundColor = arrColors[random];
})

// Change Sticky1 BG Color | by HEX Random
const sticky1 = document.getElementsByClassName("sticky1")[0];

sticky1bg.addEventListener("click",(eo)=>{
  const randomHEX = Math.random().toString(16).slice(3,9);
  console.log(`#${randomHEX}`)

  // const random = randomHEX;
  sticky1.style.backgroundColor = `#${randomHEX}`;
})

/*
// =============== Advanced Selectors ===============
document.querySelectorAll("h1:not(body > header > h1 )");
document.querySelectorAll("h1:not(body > header > h1 )");
// Copy Selector from Inspect Element
*/