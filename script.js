var res
var pointerOnclick = function() {
  // alert("你点击了按钮哦");
  let pointer = document.getElementById("pointer");
  pointer.style.transform = `rotate(-${res}deg)`;
  res=choose();
};
function choose() {
  let deg = Math.random() * 360 ;
  let pointer = document.getElementById("pointer");
  // pointer.style.transform = `rotate(0)`;
  console.log(deg);
  let deg2=deg+1080;
  pointer.style.transform = `rotate(${deg2}deg)`;
  return deg
}
