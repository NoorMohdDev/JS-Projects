const container = document.querySelector(".container");
const loadMoreBtn = document.querySelector(".load-more");
let count = 1;

loadMoreBtn.addEventListener("click", () => {
  fetchRandomImages((count += 5));
});

function fetchRandomImages(getCount) {
  for (let i = getCount; i <= getCount + 3; i++) {
    let createElement = document.createElement("img");
    createElement.src = `https://picsum.photos/300?random=${i}`;
    container.appendChild(createElement);
  }
}

fetchRandomImages(count);