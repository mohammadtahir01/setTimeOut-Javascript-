// let set=()=>{
//     let a = new Date();
//     let display = document.querySelector("#h1");
   
//     let alrm =document.querySelector("#alarm").value;
//     let b = a.toLocaleTimeString();
//     display.innerHTML = b;

//     if(b==alrm){  
        
//         show.innerHTML = "alam is ringging";
//     }
// }

// setInterval(set,1000)



// setInterval(()=>{
//     let a = new Date();
//     let display = document.querySelector("#h1");
  
//     b = a.toLocaleTimeString();
//     display.innerHTML = b;

   
// },1000)


// let time1=()=>{

// }

let stop;
let set=()=>{
    let inptime = document.querySelector("#alarm").value;//4.45;
    let show = document.querySelector("#h1");
    let mus = document.querySelector("#music");
     stop = setInterval(() => {
        let time = new Date();
        let current = `${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`;
        if(current==inptime){
          show.innerHTML = "Alaram is ringging";
          mus.play();
          
        }
        else{
            show.innerHTML="alram is set";
        }

        
        setTimeout(()=>{
            clearInterval(stop);
            mus.pause();
        },6000)
    }, 1000);


}