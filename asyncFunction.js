// function getNumber() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       resolve();
//     },1000);
//   });
// }

// async function demo() {
//   await getNumber();
//   await getNumber();
//   await getNumber();
// }


// ---------------------------------------------

h1 = document.querySelector("h1");

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

async function colorchng() {
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("yellowawait ",1000);
}

// async__________


// colorChange("red", 1000)
// .then(()=>{
//     console.log("red color changed")
//     return colorChange("orange",1000);
// })
// .then(()=>{
//     console.log("orange  color changed")
//     return colorChange("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow  color changed")
//     return colorChange("purple",1000);
// })


// colorChange("red", 1000, () => {
//   colorChange("green", 1000, () => {
//     colorChange("yellow", 1000, () => {
//       colorChange("golden", 1000);
//     });
//   });
// });