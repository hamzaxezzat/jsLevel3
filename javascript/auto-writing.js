// ========== Lesson 3 | setInterval & setTimeout ==========
// let x = 0;
// const testFun = ()=>{ title.innerText = x; x++};
// const stopFun = setInterval(testFun,1000);
// body.addEventListener("click",eo=>{ clearInterval(stopFun);});

let counter = 1;

const autoWriting = ()=>{
  let a = "Courses4Arab"
  title.innerText = a.slice(0,counter);
  counter++;
  console.log(counter);
  if ( counter > a.length) {
    clearInterval(looping);
    // counter = 1;
  };
}
// Loop
const looping = setInterval(autoWriting,300);
// clearInterval(looping);

// Stop
