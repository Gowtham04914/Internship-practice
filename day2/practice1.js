// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const ok=true;
//         if(ok) resolve("result is ready ");
//         else reject(new Error("something failed"));
//     },1000);
// });
// //async, await a
// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Data ready"), 1000);
//     });
// }

// async function show() {
//     let result = await getData();
//     console.log(result);
// }

// show();

//promise example
let p=new Promise((resolve,reject)=>{
    resolve("success");
    p.then(result=>console.log(result));
});