var res;
var pointerOnclick = function () {
  // alert("你点击了按钮哦");
  let pointer = document.getElementById("pointer");
  pointer.style.transform = `rotate(-${res}deg)`;
  res = choose();
};
function choose() {
  let deg = Math.random() * 360;
  let pointer = document.getElementById("pointer");
  // pointer.style.transform = `rotate(0)`;
  console.log(deg);
  let deg2 = deg + 1080;
  pointer.style.transform = `rotate(${deg2}deg)`;
  return deg;
}
function draw() {
  var canvas = document.getElementById("ttitle");
  if (!canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var cover = new Image();
  var text = new Image();
  cover.src =
    "https://cdn.glitch.global/e9413733-3dc8-4177-9519-e49e85823303/title.png?v=1642216305038";
  text.src =
    "https://cdn.glitch.global/e9413733-3dc8-4177-9519-e49e85823303/%E5%B9%BB%E7%81%AF%E7%89%871.png?v=1642216639483";
  ctx.drawImage(cover,0,0);
  ctx.drawImage(text,0,0);
}