const hexBtn = document.querySelector(".hex-btn");
const hexCopyColor = document.querySelector(".hex-copy-color");
let hexColorValue = document.querySelector(".hex-color-value");
let hexColorContainer = document.querySelector(
  ".hex-color-container"
);

const rgbBtn = document.querySelector(".rgb-btn");
const rgbCopyColor = document.querySelector(".rgb-copy-color");

hexBtn.addEventListener("click", () => {
  const str = "abcdef0123456789";
  let newHexValue = "";

  for (let i = 1; i <= 6; i++) {
    newHexValue += str[Math.floor(Math.random() * 16)];
  }

  hexColorValue.innerHTML = `#${newHexValue}`;
  
  hexColorContainer.style.backgroundColor = hexColorValue.innerHTML;    
});

const createRGBColor = () => {};
