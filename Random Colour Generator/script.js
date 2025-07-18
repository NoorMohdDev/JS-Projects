const hexBtn = document.querySelector(".hex-btn");
const hexCopyColor = document.querySelector(".hex-copy-color");
let hexColorValue = document.querySelector(".hex-color-value");
let hexColorContainer = document.querySelector(".hex-color-container");

const rgbBtn = document.querySelector(".rgb-btn");
const rgbCopyColor = document.querySelector(".rgb-copy-color");
let rgbColorValue = document.querySelector(".rgb-color-value");
let rgbColorContainer = document.querySelector(".rgb-color-container");
let green = 0;
let red = 0;
let blue = 0;

const copyColorToClipBoard = document.querySelectorAll(".rgb-copy-color, .hex-copy-color");


hexBtn.addEventListener("click", () => {
  const str = "abcdef0123456789";
  let newHexValue = "";

  for (let i = 1; i <= 6; i++) {
    newHexValue += str[Math.floor(Math.random() * str.length)];
  }

  hexColorValue.innerHTML = `#${newHexValue}`;

  hexColorContainer.style.backgroundColor = hexColorValue.innerHTML;
});

rgbBtn.addEventListener("click", () => {

  document.querySelectorAll("input").forEach((element) => {
    if (element.id === "red") {
      red = Math.floor(Math.random() * element.max);
      element.value = red;
    } else if (element.id === "blue") {
      blue = Math.floor(Math.random() * element.max);
      element.value = blue;
    } else {
      green = Math.floor(Math.random() * element.max);
      element.value = green;
    }
  });

  rgbColorValue.innerHTML = `rgb(${red},${green},${blue})`;

  rgbColorContainer.style.backgroundColor = rgbColorValue.innerHTML;
});

document.querySelectorAll("input").forEach((element) => {
  element.addEventListener("change", () => {
    if (element.id === "red") {
      red = element.value;
    } else if (element.id === "blue") {
      blue = element.value;
    } else {
      green = element.value;
    }
    rgbColorValue.innerHTML = `rgb(${red},${green},${blue})`;
    rgbColorContainer.style.backgroundColor = rgbColorValue.innerHTML;
  });
});

copyColorToClipBoard.forEach(element => {
    element.addEventListener("click", (e) => {

          navigator.clipboard.writeText(e.target.classList.value === "hex-copy-color"? hexColorValue.innerHTML : rgbColorValue.innerHTML).then(() => {
            element.innerHTML = "Copied";
            
          })
          setTimeout(() => {
            element.innerHTML = "Copy To Clipboard";
          }, 1000);
          
      }
)})
