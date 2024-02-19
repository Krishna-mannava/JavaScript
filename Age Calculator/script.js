// document.getElementById("calculateAge").addEventListener("click", function() {
//     // Get the birthdate from the input field
//     var birthdate = new Date(document.getElementById("birthdate").value);
    
//     // Get the current date
//     var currentDate = new Date();

//     // Calculate the difference in milliseconds
//     var difference = currentDate - birthdate;

//     // Convert the difference to years
//     var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));

//     // Display the age
//     document.getElementById("result").textContent = "Your age is: " + age;
// });
let currDate= document.getElementById("currDate");
let dateOfBirth = document.querySelector("#DOB");
const CalcAge= document.getElementById("CalcAge");
const displayAge= document.getElementById("displayAge");
const Age= document.getElementById("age");
var today = new Date();
currDate.innerText=`Today's Date is : ${today.toLocaleDateString('en-US')}`;

CalcAge.addEventListener("click",()=>{
    var birthDate = new Date(dateOfBirth.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
displayAge.style.visibility="visible";
Age.innerText=`You are ${age} years old.`
});
