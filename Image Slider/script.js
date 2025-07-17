const slider = document.querySelector(".slider");
let page = 1;
let limit = 5;
const apiURL = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
const dotsContainer = document.querySelector(".dots-container");
const dots = document.querySelector(".dots");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let prevCount = 0;
let nextCount = limit - prevCount - 1;
let imagesData = [];

document.onload = sliderImages();

async function sliderImages() {
  try {
    let fetchImagesList = await fetch(apiURL, {
      method: "GET",
    });

    fetchImagesList = await fetchImagesList.json();

    if (fetchImagesList && fetchImagesList.length > 0) {
      showImages(fetchImagesList);
      showDots(fetchImagesList);
      toggleImages();
      imagesData = fetchImagesList;
    }
  } catch (error) {
    console.log(error);
  }
}

function showImages(data) {
  slider.innerHTML = data
    .map(
      (e) =>
        `<div class="slide">
            <img src=${e.download_url} alt="" width=500 height=300 class="${
          Number(e.id) === prevCount ? "active" : ""
        }" id=${e.id}>
        </div>`
    )
    .join(" ");
}

function showDots(data) {
  dotsContainer.innerHTML = data
    .map(
      (e, index) =>
        `<span class="dot ${
          index === prevCount ? "active" : ""
        }" data-slide=${index}></span>`
    )
    .join(" ");
}

function toggleImages() {
  if (prevCount === 0) {
    prev.setAttribute("disabled", null);
  } else {
    prev.removeAttribute("disabled");
    prev.addEventListener("click", showNextImage);
  }
  if (nextCount === 0) {
    next.setAttribute("disabled", null);
  } else {
    next.removeAttribute("disabled");
    next.addEventListener("click", showNextImage);
  }
}

function showNextImage(e) {
  if (e.target.classList.contains("prev")) {
    if (prevCount <= limit - 1 && prevCount !== 0) {
      prevCount--;
      nextCount++;
    }
  } else {
    if (nextCount <= limit - 1 && nextCount !== 0) {
      prevCount++;
      nextCount--;
    }
  }
  toggleImages();
  showImages(imagesData);
  showDots(imagesData);
}
