// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   let link = await getImage();
  
//   let img = document.querySelector("#res")
//   img.setAttribute("src", link)
// });


// async function getImage() {
//   try {
//     let res = await axios.get(url);
//     return res.data.message;
//   } catch (error) {
//     return "no Image found";
//   }
// }


 


// async function getFacts() {
// let res = await fetch(url);
// let data = await res.json();
// console.log(data);
// // }

// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json();
// })
// .then((data)=>{
//     console.log(data.fact)
//     return  fetch(url);

// })
// .then((res)=>{
//     return  res.json()
// })
// .then((data2)=>{
//     console.log(data2)
// })
// .catch((err)=>{
//     console.log("Error",err)
// })
