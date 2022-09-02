var numberOfDrumButtons = document.querySelectorAll(".drum").length;

document.querySelector("button").style.backgroundColor= "green";
for(var i =0; i < numberOfDrumButtons ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

     var buttonInnerHTML = this.innerHTML;
     makesound(buttonInnerHTML);
     buttonAnimation(buttonInnerHTML);
});

}

document.addEventListener("keydown", function(event){
   var keybepressed = event.key;
    makesound(keybepressed);
    buttonAnimation(event.key);
});

function makesound(key){
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/left-alert.mp3");
     tom1.play();
      break;

     case "a":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
      break;

      case "s":
      var tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
       break;

       case "d":
       var tom4 = new Audio("sounds/tom-4.mp3");
       tom4.play();
        break;

        case "j":
        var snare = new Audio("sounds/snare.mp3");
       snare.play();
         break;

         case "k":
         var crash = new Audio("sounds/crash.mp3");
         crash.play();
          break;


          case "l":
          var kik = new Audio("sounds/kick-bass.mp3");
          kik.play();
           break;

    default: console.log(buttonInnerHTML);
  }

}

function buttonAnimation(currentkey){
var activeButton = document.querySelector("." + currentkey);
activeButton.classList.remove("pressed");
activeButton.classList.add("pressed");
 setTimeout(function(){
     activeButton.classList.remove("pressed");
 }, 100);
}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
