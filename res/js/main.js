let frog = document.getElementById("froge");

let movement = () => {
  moveToFirstLily();
  setTimeout(() => {
    moveToSecondLily();
  }, 2000);
  setTimeout(() => {
    moveToThirdLily();
  }, 4000);
  setTimeout(() => {
    moveToFourLily();
  }, 6000);
  setTimeout(() => {
    moveToFiveLily();
  }, 8000);
  setTimeout(() => {
    firstPosition();
  }, 10000);
};

window.onload = () => {
  movement();
  setInterval(movement, 12000);
};

let firstPosition = () => {
  frog.style.left = 855 + "px";
  frog.style.top = 800 + "px";
};

let moveToFirstLily = () => {
  frog.style.left = 1250 + "px";
  frog.style.top = 800 + "px";
};

let moveToSecondLily = () => {
  frog.style.left = 1250 + "px";
  frog.style.top = 550 + "px";
};

let moveToThirdLily = () => {
  frog.style.left = 950 + "px";
  frog.style.top = 480 + "px";
};

let moveToFourLily = () => {
  frog.style.left = 300 + "px";
  frog.style.top = 480 + "px";
};

let moveToFiveLily = () => {
  frog.style.left = 150 + "px";
  frog.style.top = 820 + "px";
};
