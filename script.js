let today = new Date
let day = today.getDay()
let countDown = ""
let message = ""

switch (day) {
    case 0:
        countDown = "Today is Sunday, only 5 days left until weekend"
        break;
    case 1:
        countDown = "Today is Monday, only 4 days left until weekend"
        break;
    case 2:
        countDown = "Today is Tuesday, only 3 days left until weekend"
        break;
    case 3:
        countDown = "Today is Wednesday, only 2 days left until weekend"
        break;
    case 4:
        countDown = "Today is Thursday, only 1 days left until weekend"
        break;
    case 5:
        countDown = "Today is Friday, only 0 days left until weekend"
        break;
    case 6:
        countDown = "Today is Saturday, only 6 days left until weekend"
        break;
}


const userName = document.querySelector("input");
const btn = document.getElementById("btn");
const para=document.querySelector("p")
btn.addEventListener("click",function (e) {
 e.preventDefault()
    message = `Welcome ${userName.value}! ${countDown} `;
    para.textContent = message;
   
})



// OR with Function

/* let today = new Date;
let day = today.getDay();//0-6-->today(Tuesday) is 2
let message=""
 
function displayCountDown() {
let weekday = today.toLocaleString("default", { weekday: "long" });//from google

   return day >= 1 && day <= 5
     ? `Today is ${weekday}.Only ${5 - day} days left until weekend!`
     : `Enjoy your weekend!`;
}


const userName = document.querySelector("input");
const btn = document.querySelector("button");
const para=document.querySelector("p")
btn.addEventListener("click",function () {
    message = `Welcome ${userName.value}! ${displayCountDown()} `;
    para.textContent = message;
   
}) */


// OR this way

/**
 * const currentDate = new Date();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const weekdayNum = currentDate.getDay();

const weekDayName = weekdays[currentDate.getDay()];



const submitButton = document.querySelector(".submit");
const inputField = document.getElementById("name");
const message = document.querySelector("div");



function displayMessage(e) {
  e.preventDefault();
  let username = inputField.value;
  let daysLeft = 5 - weekdayNum;
 

  message.innerHTML = `<p>Hello ${username}. Today is ${weekDayName}. Only <span>${daysLeft} </span> more days left until the weekend!</p>`;

  message.style.fontSize = "20px";

  let span = document.querySelector('span');
  span.style.color = "green";
  span.style.fontSize = "25px";

  
  if (daysLeft === 1){
    message.innerText = `Hello ${username}. Today is ${weekDayName}. Enjoy the weekend!`;
  }

  if (daysLeft === 0){
    message.innerText = `Hello ${username}. Today is ${weekDayName}. Enjoy the rest of the weekend!`;
  }
  
}

submitButton.addEventListener("click", displayMessage);
 */