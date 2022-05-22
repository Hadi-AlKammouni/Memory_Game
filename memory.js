// Declaring audio variable for each color + wrong audio 
let green_audio = document.getElementById("green_audio");
let red_audio = document.getElementById("red_audio");
let yellow_audio = document.getElementById("yellow_audio");
let blue_audio = document.getElementById("blue_audio");
let wrong_audio = document.getElementById("wrong_audio");

// Declaring variables for selecting the boxes and the body
let green_box = document.getElementsByClassName("top_boxes")[0];
let red_box = document.getElementsByClassName("top_boxes")[1];
let yellow_box = document.getElementsByClassName("bottom_boxes")[0];
let blue_box = document.getElementsByClassName("bottom_boxes")[1];
let body = document.getElementById("body");

// Declaring an array containing the four audios of the colors
const myArray = [green_audio, red_audio, yellow_audio, blue_audio];

// Declaring the variable level to track the level of the user
let level =1;

// User must click on any key on the keyboard to start the game
body.addEventListener("keypress",startGame)

function startGame(){

}    