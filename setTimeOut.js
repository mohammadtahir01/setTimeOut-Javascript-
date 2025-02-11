
// setTimeout((ab) => {
//     console.log("running after 3 seconds");
//   }, 3000);
// console.log("running");


// let ab=()=>{
//     let bc=document.querySelector("#ba");
//     setTimeout(() => {
     
//        bc.innerHTML="running after 3 seconds";
//       }, 3000);
// }

// count = 0;
// let ab=()=>{
//     setInterval(() => {
//         let bc=document.querySelector("#ba");
//         bc.innerHTML=count;
//         // console.log("tahir");
//         // console.log(count);
//         count++;
//     }, 1000);
    
// }

let inetr;
count = 0;
let ab=()=>{
    inetr = setInterval(() => {
        let bc=document.querySelector("#ba");
        bc.innerHTML=count;
        // console.log("tahir");
        // console.log(count);
        count++;
    }, 1000);

}
let  stop1=()=>{
    clearInterval(inetr);
}
