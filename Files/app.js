// console.log("Kashif")
let colors = [];
let numSquares = 6;
let pickedColor;

const square = document.querySelectorAll(".squares");
const colorDisplay = document.querySelector(".colorDisplay");
const messageDisplay = document.querySelector(".messageDisplay")
const h1 = document.querySelector(".heading")
const resetButton = document.querySelector(".reset")
const modeButtons = document.querySelectorAll(".mode")
const removeAble = document.querySelectorAll(".rmv");

init();

function init() {
    colorDisplay.textContent = pickedColor;
    setupMode();
    setupSquares();
    reset();
}

resetButton.addEventListener("click", function () {
    reset();
})


function setupSquares() {
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again";
                changeColors(pickedColor);
            } else {
                messageDisplay.textContent = "Try Again";
                this.style.backgroundColor = "black"
            }
        })
    }
}


function setupMode() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            for (let i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove("selected")
            }
            this.classList.add("selected")
            if (this.textContent === "Easy") {
                numSquares = 3
                if(numSquares===3)[
                    removeAbleFnc()
                ]
            } else {
                numSquares = 6
            }
            reset()
        })
    }
}


function removeAbleFnc() {
    for (let i = 0; removeAble.length; i++) {
        removeAble[i].classList.add("removeable")
    }
}


function reset() {
    colors = getRandomColors(numSquares);
    pickedColor = chooseColor();
    colorDisplay.textContent = pickedColor
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "skyblue"
    resetButton.textContent = "New Colors"
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i]
        }
    }
}

function changeColors(color) {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
        h1.style.backgroundColor = color;
    }
}


function chooseColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
}


function getRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(makeColor())
    }
    return arr
}
function makeColor() {
    let r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
// init();

// function init() {
//     colorDisplay.textContent = pickedColor
//     setupSquares();
//     reset();
//     setupMode();
// }

// resetButton.addEventListener("click", function () {
//     reset()
// })

// function setupSquares() {
//     for (let i = 0; i < square.length; i++) {
//         square[i].addEventListener("click", function () {
//             // console.log("Kasif")
//             let clickedColor = this.style.backgroundColor;
//             if (clickedColor == pickedColor) {
//                 messageDisplay.textContent = "Correct";
//                 resetButton.textContent = "Play Again"
//                 changeColors(pickedColor)
//             } else {
//                 messageDisplay.textContent = "Try Again";
//                 this.style.backgroundColor = "black"
//             }
//         })
//     }
// }


// function setupMode() {
//     for (let i = 0; i < modeButtons.length; i++) {
//         modeButtons[i].addEventListener("click", function () {
//             for (let i = 0; i < modeButtons.length; i++) {
//                 modeButtons[i].classList.remove("selected")
//             }
//             this.classList.add("selected");
//             if (this.textContent === "Easy") {
//                 numSquares = 3;
//             } else {
//                 numSquares = 6
//             }
//             reset()
//         })
//     }
// }

// function reset() {
//     colors = getRandomColors(numSquares);
//     pickedColor = chooseColor()
//     colorDisplay.textContent = pickedColor
//     messageDisplay.textContent = "";
//     h1.style.backgroundColor = "skyblue"
//     resetButton.textContent = "New Colors"
//     for (let i = 0; i < square.length; i++) {
//         if (colors[i]) {
//             square[i].style.backgroundColor = colors[i]
//         }
//     }
// }

// function changeColors(color) {
//     for (let i = 0; i < square.length; i++) {
//         square[i].style.backgroundColor = color;
//         h1.style.backgroundColor = color
//     }
// }

// function chooseColor() {
//     let radom = Math.floor(Math.random() * colors.length)
//     return colors[radom]
// }

// function getRandomColors(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr.push(makeColor())
//     }
//     return arr
// }
// function makeColor() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     return ("rgb(" + r + ", " + g + ", " + b + ")")
// }


