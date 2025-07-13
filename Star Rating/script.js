const container = document.querySelector(".container");
const starRatingContainer = document.querySelector(".star-rating-container");
const starRatingValue = document.querySelector(".selected-rating-value");
const starIcons = document.querySelectorAll(".fa");

starIcons.forEach((item) => {
  item.addEventListener("mouseover", (e) => {

    item.classList.add("active");
    for (let i = 0; i < starIcons.length; i++) {
      if (starIcons[i].classList.contains("active")) {
        return;
      } else {
        starIcons[i].classList.add("active");
      }
    }
  });

  item.addEventListener("mouseout", (e) => {

    item.classList.remove("active");
    for (let i = 0; i < starIcons.length; i++) {
      if (!starIcons[i].classList.contains("active")) {
        return;
      } else {
        starIcons[i].classList.remove("active");
      }
    }
  });

  item.addEventListener("click", (e) => {

    starRatingValue.innerText = 1;
    for (let i = 0; i < starIcons.length; i++) {
      if (starIcons[i].classList.contains("active")) {
        starRatingValue.innerText = 1
        console.log(i);
        
        return;
      } else {
        starIcons[i].classList.add("active");
      }
    }
  });
  
});
