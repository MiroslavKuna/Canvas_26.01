const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clear = document.getElementById("clear");
const save = document.getElementById("save");
const color = document.getElementById("colorPick");
const range = document.getElementById("lineWidth");
let width;

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top,
  };
}

function getColor() {
  return color.value;
}

function mouseMove(evt) {
  var mousePos = getMousePos(canvas, evt);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
}
range.onchange = function () {
    width = parseInt(range.value) +1;
    console.log(width);
};

canvas.addEventListener("mousedown", function (evt) {
  var mousePos = getMousePos(canvas, evt);
    ctx.lineWidth = width;
  ctx.strokeStyle = getColor();
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y);
  evt.preventDefault();
  canvas.addEventListener("mousemove", mouseMove, false);
});

canvas.addEventListener(
  "mouseup",
  function () {
    canvas.removeEventListener("mousemove", mouseMove, false);
  },
  false
);

document.getElementById("clear").addEventListener(
  "click",
  function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  false
);

