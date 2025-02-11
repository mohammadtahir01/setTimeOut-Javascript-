
count = 10;
let set1=()=>{
    let ab = document.querySelector("#time");
    let ba = document.querySelector("#time2");
    setInterval(()=>{
        ab.innerHTML = count;
        ba.innerHTML = count;
        count--;
    }, 2000);
};
   