var box = document.querySelector('.box');
createTable();
var boxes = document.querySelectorAll('.xo');
var lines = [
  [boxes[0],boxes[1],boxes[2]],
  [boxes[3],boxes[4],boxes[5]],
  [boxes[6],boxes[7],boxes[8]],
  [boxes[0],boxes[3],boxes[6]],
  [boxes[1],boxes[4],boxes[7]],
  [boxes[2],boxes[5],boxes[8]],
  [boxes[0],boxes[4],boxes[8]],
  [boxes[2],boxes[4],boxes[6]]
];
var pom = 0;
var n = 0;

// var newDiv = document.createElement('div');
// newDiv.className = "newDiv";
// box.appendChild(newDiv);

// var text = '<div class="newDiv"></div>';
// box.innerHTML = text;

function createTable() {
  var text = '';
  for (var i = 0; i < 9; i++) {
    text += '<div class="xo"></div>'
  }
  box.innerHTML = text;
}


function run() {
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('click',insertSymbol);
    }
}

function insertSymbol() {
  if (this.innerHTML=="" && pom === 0) {
    this.innerHTML = "X";
    pom = 1;
  } else if (this.innerHTML=="") {
    this.innerHTML = "O";
    pom = 0;
  } // moguce pomocu ternarnog operatora
  // (symbol == "0") ? symbol ="X" : symbol = "O"
  //this.innerHTML = symbol
  n++;
  checkLines();
}

function checkLines() {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line[0].innerHTML == line[1].innerHTML && line[0].innerHTML == line[2].innerHTML && line[0].innerHTML != "") {
      for (var j = 0; j < line.length; j++) {
        line[j].style.background = "tomato";
      }
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener('click',insertSymbol);
      }
      setTimeout(playAgain, 3000);
    } 
  }
  if (n === 9) {
    setTimeout(playAgain, 3000);
  }
}

function playAgain() {
  let restart = false;
  restart = confirm("Do you want to play again?\nOK - Yes\nCancel - No");
  if (restart === true) {
    restart = false;
    location.reload();
  }
}

run();
// function checkLines() {
//   if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML && boxes[0].innerHTML != "") {
//     boxes[0].style.background = "tomato";
//     boxes[1].style.background = "tomato";
//     boxes[2].style.background = "tomato";
//   } else if (boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML && boxes[3].innerHTML != "") {
//     boxes[3].style.background = "tomato";
//     boxes[4].style.background = "tomato";
//     boxes[5].style.background = "tomato";
//   } else if (boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML && boxes[6].innerHTML != "") {
//     boxes[6].style.background = "tomato";
//     boxes[7].style.background = "tomato";
//     boxes[8].style.background = "tomato";
//   } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML && boxes[0].innerHTML != "") {
//     boxes[0].style.background = "tomato";
//     boxes[3].style.background = "tomato";
//     boxes[6].style.background = "tomato";
//   } else if (boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML && boxes[1].innerHTML != "") {
//     boxes[1].style.background = "tomato";
//     boxes[4].style.background = "tomato";
//     boxes[7].style.background = "tomato";
//   } else if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML && boxes[2].innerHTML != "") {
//     boxes[2].style.background = "tomato";
//     boxes[5].style.background = "tomato";
//     boxes[8].style.background = "tomato";
//   } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != "") {
//     boxes[0].style.background = "tomato";
//     boxes[4].style.background = "tomato";
//     boxes[8].style.background = "tomato";
//   } else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != "") {
//     boxes[2].style.background = "tomato";
//     boxes[4].style.background = "tomato";
//     boxes[6].style.background = "tomato";
//   }
// }
