let playerGamePiece, teacherGamePiece;
const mainChar = document.querySelector(".main-char");
const teacher = document.querySelector("teacher");

function startGame() {
  playerGamePiece = new component(50, 50, "green", 650, 425);
  teacherGamePiece = new component(100, 100, "red", 10, 10);
  myGameArea.start();
}

let myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 1350;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener("keydown", function (e) {
      myGameArea.key = e.keyCode;
    });
    window.addEventListener("keyup", function (e) {
      myGameArea.key = false;
    });
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  playerGamePiece.speedX = 0;
  playerGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {
    playerGamePiece.speedX = -2;
  }
  if (myGameArea.key && myGameArea.key == 39) {
    playerGamePiece.speedX = 2;
  }
  if (myGameArea.key && myGameArea.key == 38) {
    playerGamePiece.speedY = -2;
  }
  if (myGameArea.key && myGameArea.key == 40) {
    playerGamePiece.speedY = 2;
  }
  playerGamePiece.newPos();
  playerGamePiece.update();
  playerGamePiece.update();
  teacherGamePiece.speedX = 3;
  teacherGamePiece.speedY = 0;

  teacherGamePiece.newPos();
  teacherGamePiece.update();
}
