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
//     ab1.innerHTML=(day[t.getDay()-2025]);
// }





// console.log(time.getTimezoneOffset());
// console.log(time.getUTCDate());
// console.log(time.getUTCDay());
// console.log(time.getUTCFullYear());
// console.log(time.getUTCHours());
// console.log(time.getUTCMilliseconds());


// let btn=()=>{
//     let today = new Date();
//     let ageinp = document.querySelector("#age").value;
//     let age1 = document.querySelector("#ab");
//     today.getFullYear() - birthDate.getFullYear();
//     ageinp = today;
//     age1.innerHTML=`your age is ${ageinp}`
    
// }



function calculateAge(birthdate) {
    let birthDate = new Date(birthdate);
    let today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

// Example usage
console.log(calculateAge("2003-02-15")); // Output: Age based on the current date