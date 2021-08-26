/**
 Challenge:

 When the button is clicked, call out to the Bored API
 (URL: https://apis.scrimba.com/bored/api/activity)
 and replace the h4 with the activity from the API

 */

let gradients = ["gradient-pink", "gradient-green", "default", "pattern"];
let fonts = ["large", "green", "uppercase"];
let container = document.getElementById("container");

let taskHeader = document.getElementById("task");
let getActivity = () => {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("task").textContent = data.activity
            document.body.classList.remove("gradient-pink", "gradient-green", "default","pattern")
document.body.classList.add(getRandomGradient())
            taskHeader.classList.remove("large", "green", "uppercase")
            taskHeader.classList.add(getRandomFont());


        })

}
let button = document.getElementById("the-button")
button.addEventListener("click", getActivity)

let getRandomGradient = () => gradients[Math.floor(Math.random() * gradients.length)];
let getRandomFont = () => fonts[Math.floor(Math.random() * fonts.length)];
