let stop;
count = 0;
let set1=()=>{
    let out = document.querySelector("#time2");
    let inp = document.querySelector("#time").value;
     if(inp>=1){
        count = inp;
        out.innerHTML = count;
       stop = setInterval(()=>{
            count--;
            out.innerHTML=count;
            if(count==1){
              clearInterval(stop)
            }
        },1000)
     }
};
   