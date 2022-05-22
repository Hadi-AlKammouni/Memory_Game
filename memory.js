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

    // To only have the option to click on the boxes
    body.removeEventListener("keypress",startGame)

    // Selecting a random audio each time the game starts
    let random_sound=myArray[Math.floor(Math.random() * myArray.length)]
    random_sound.play()

    switch(random_sound) {

        case green_audio:
          // To fade the required box  
          green_box.style.visibility="hidden" 
          setTimeout(returnGreenVisible,200) // The function returnVisible is called after a delay 0.2s to return the box into visible state
          function returnGreenVisible(){
            green_box.style.visibility="visible"
          }
          document.getElementById("start").innerHTML=`level ${level}`
          green_box.onclick=function() {decision("green")}
          red_box.onclick=function() {decision()}
          yellow_box.onclick=function() {decision()}
          blue_box.onclick=function() {decision()}
        break;

        case red_audio:
          // To fade the required box  
          red_box.style.visibility="hidden" 
          setTimeout(returnRedVisible,200) // The function returnVisible is called after a delay 0.2s to return the box into visible state
          function returnRedVisible(){
            red_box.style.visibility="visible"
          }
          document.getElementById("start").innerHTML=`level ${level}`
          red_box.onclick=function() {decision("red")}
          green_box.onclick=function() {decision()}
          yellow_box.onclick=function() {decision()}
          blue_box.onclick=function() {decision()}   
        break;

        case yellow_audio:
          // To fade the required box  
          yellow_box.style.visibility="hidden" 
          setTimeout(returnYellowVisible,200) // The function returnVisible is called after a delay 0.2s to return the box into visible state
          function returnYellowVisible(){
            yellow_box.style.visibility="visible"
          }
          document.getElementById("start").innerHTML=`level ${level}`
          yellow_box.onclick=function() {decision("yellow")}
          green_box.onclick=function() {decision()}
          red_box.onclick=function() {decision()}
          blue_box.onclick=function() {decision()}     
        break;  

        case blue_audio:
          // To fade the required box  
          blue_box.style.visibility="hidden" 
          setTimeout(returnBlueVisible,200) // The function returnVisible is called after a delay 0.2s to return the box into visible state
          function returnBlueVisible(){
            blue_box.style.visibility="visible"
          }
          document.getElementById("start").innerHTML=`level ${level}`
          blue_box.onclick=function() {decision("blue")}
          green_box.onclick=function() {decision()}
          yellow_box.onclick=function() {decision()}
          red_box.onclick=function() {decision()}  
        break;
    }

    // A function called upon clicking on a box taking a parameter that decide what to be done
    function decision(game_state){
        if (game_state == "green"){
            // Upon clicking the green box:
            // The background color changes into grey for only 0.2s
            // The audio that corresponds to the green color will play
            // The level increases by one
            // The startGame function is recalled
            level+=1 
            green_box.style.backgroundColor="grey"
            green_audio.play()
            setTimeout(returnGreenColor,200) // The function returnGreenColor is called after a delay 0.2s to return the green color
            function returnGreenColor(){
                green_box.style.backgroundColor="green"
            }
            setTimeout(continuePlaying,1000)
            function continuePlaying(){
                startGame()
            }
        }
    }    
}    