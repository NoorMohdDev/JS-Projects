const slider = document.querySelector(".slider");
let page = 1;
let limit = 5;
const apiURL = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
const dotsContainer = document.querySelector(".dots-container");
const dots = document.querySelector(".dots");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let prevCount = 1;
let nextCount = limit - prevCount;

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
          Number(e.id) === 0 ? "active" : ""
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
          index === 0 ? "active" : ""
        }" data-slide=${index}></span>`
    )
    .join(" ");
}

function toggleImages() {
  nextCount === limit
    ? prev.setAttribute("disabled", null)
    : prev.addEventListener("click", showNextImage);
  nextCount === 0
    ? next.setAttribute("disabled", null)
    : next.addEventListener("click", showNextImage);
}

function showNextImage(e) {
  if (e.target.classList.contains("prev")) {
    const findImage = slider.querySelectorAll("img");
    const activeSlide = findImage.forEach((e) => {
      if(e.classList.contains("active")){
            return e
          console.log(e.classList.contains('active'));
      };
    });
    console.log(activeSlide);
  } else {
  }
}
