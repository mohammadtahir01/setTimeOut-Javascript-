// let time=()=>{
//     let a = new Date();
//     let display = document.querySelector("#h1");
//     b = a.toLocaleTimeString();
//     display.innerHTML = b;
// }

// setInterval(time,1000)



setInterval(()=>{
    let a = new Date();
    let display = document.querySelector("#h1");
    let show = document.querySelector("#h2");
    b = a.toLocaleTimeString();
    display.innerHTML = b;

    if(show==b){
        innerHTML = `alam is ringging`
    }
},1000)


// let time1=()=>{

// }