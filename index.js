/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){
  time = parseInt(timeString)
  if (time < 12){
    greeting = "Good Morning"
  }else if (time >= 12 && time < 17){
    greeting = "Good Afternoon"
  }else {
    greeting = "Good Evening"
  }
  return greeting;
}

// function greet(timeString){
//   time = parseInt(timeString)
//   if (time < 12) return "Good Morning"
//   if (time > 16) return "Good Evening"
//   return "Good Afternoon"
// }

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById('greeting').innerText = message;
}

