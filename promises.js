// Call back Hell

// function sendTODb(data, success, failure) {
//   let internet = Math.floor(Math.random() * 10) + 1;
//   if (internet > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// sendTODb(
//   "apnacollege",
//   () => {
//     console.log("success Data Saved");
//     sendTODb(
//       "helloworld",
//       () => {
//         console.log("success2 data 2 saved");
//         sendTODb("shrdha", () => {
//           console.log("sucess saved data 3");
//         });
//       },
//       () => {
//         console.log("failure 2 fail to save");
//       }
//     );
//   },
//   () => {
//     console.log("Failure Not Saved");
//   }
// );

// Promises

// function sendTODb(data) {
//   return new Promise((resolve, reject) => {
//     let internet = Math.floor(Math.random() * 10) + 1;
//     if (internet > 4) {
//       resolve("success :data was saved");
//     } else {
//       reject("failure :data not saved");
//     }
//   });
// }
// sendTODb("apnacollege")
//   .then((result) => {
//     console.log("promise resolved data 1 saved");
//    return sendTODb("hello world")
//   })
//   .then((result)=>{
//     console.log("data 2 saved")
//   })
//   .catch((error) => {
//     console.log("promise rejected");
//   });

//

// h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

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
