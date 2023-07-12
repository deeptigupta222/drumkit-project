let arrayOfDrums = document.querySelectorAll(".drum1");

for (let i = 0; i < arrayOfDrums.length; i++) {
  arrayOfDrums[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
  arrayOfDrums[i].addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}

const makeSound = (key) => {
  switch (key) {
    case "D":
      let tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;
    case "r":
      let tom2 = new Audio("sounds/crash.mp3");
      tom2.play();
      break;
    case "u":
      let tom3 = new Audio("sounds/kick-bass.mp3");
      tom3.play();
      break;
    case "m":
      let tom4 = new Audio("sounds/tom-1.mp3");
      tom4.play();
      break;
    case "K":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "i":
      let crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      break;
    case "t":
      let kick = new Audio("sounds/tom-3.mp3");
      kick.play();
      break;
    default:
      alert("Wrong key pressed");
  }
};

const buttonAnimation = (key) => {
  let activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
;
