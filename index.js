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
  }else if (time >= 17){
    greeting = "Good Evening"
  }else {
    greeting = "Error with time"
  }
  console.log(greeting);
}

/* Write your implementation of displayMessage() */
