const tabsButton = document.querySelectorAll(".tab-button");
const content = document.querySelectorAll(".content");

tabsButton.forEach((item) => {
  if (!item.classList.contains("active")) {
    item.addEventListener("click", changeTabs);
  }
});

function changeTabs(e) {

  for (let i = 0; i < tabsButton.length; i++) {
    const itemButton = tabsButton[i];
    if (itemButton.classList.contains("active")) {

      itemButton.classList.remove("active");
      itemButton.addEventListener("click", changeTabs);

      for (let j = 0; j < content.length; j++) {
        const itemContent = content[j];

        if (itemContent.classList.contains("active")) {
          itemContent.classList.remove("active");
        }
        if (itemContent.id === e.target.dataset.id) {
          itemContent.classList.add("active");
        }
      }
      e.target.classList.add("active");
      e.target.removeEventListener("click", changeTabs);
      break
    }
  }
}
