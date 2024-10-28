var btn1 = document.querySelector(".btn");

var crossbtn = document.querySelector(".fa");

var act = document.querySelector(".trailer-container");

var vid = document.querySelector("video");

btn1.addEventListener("click", () => {
  act.classList.remove("active");
});

crossbtn.addEventListener("click", () => {
  act.classList.add("active");
  vid.pause();
  vid.currentTime = 0;
});
