// console.log(new Date());
// console.log(new Date().toLocaleString());

// let time = new Date(); // new object ke form me deta h isliye new keyword use hota h agr hm new keyword nhi krenge to string type me date show hogi
// console.log(time.getFullYear());
// console.log(time.getMonth());
// console.log(time.getDate());
// console.log(time.getDay());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds()); 
// console.log(time.getMilliseconds());
// console.log(time.getTime());

// let btn=()=>{
    
//     let t=new Date()
//     let ab1 = document.querySelector("#ab")
//     let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     ab1.innerHTML=(day[t.getDay()]);
// }





// console.log(time.getTimezoneOffset());
// console.log(time.getUTCDate());
// console.log(time.getUTCDay());
// console.log(time.getUTCFullYear());
// console.log(time.getUTCHours());
// console.log(time.getUTCMilliseconds());


// let btn=()=>{
//     let ageinp = document.querySelector("#birthday").value;
//     let age1 = document.querySelector("#age");

//     let current = new Date().getFullYear();
//     let age2 = current - ageinp;
//     age1.innerHTML=`your age is ${age2} `;
    
// }


let btn=()=>{
    let ageinp = document.querySelector("#birthday").value;
    let age1 = document.querySelector("#age");

    let current = new Date();
    let age2 = current.getFullYear() - ageinp;
    age1.innerHTML=`your age is ${age2}`;
    
}




// function btn() {
//     let birthdayYear = document.querySelector("#birthdayYear").value;
//     let currentYear = new Date().getFullYear();
//     let age = currentYear - birthdayYear;

//     document.querySelector("#age").innerHTML = "Your age is: " + age;
// }