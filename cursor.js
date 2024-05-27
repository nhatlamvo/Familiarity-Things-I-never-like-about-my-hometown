const cursorTag = document.querySelector("div.cursor");
const mushroom = cursorTag.querySelector("img");

let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;
let speed = 0.2;

const animate = function () {
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;

  mushroom.style.left = currentX + "px";
  mushroom.style.top = currentY + "px";

  requestAnimationFrame(animate);
};

animate();

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX;
  aimY = event.pageY;
});
