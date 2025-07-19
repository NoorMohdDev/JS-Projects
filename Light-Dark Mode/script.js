const toggleTheme = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
const toggleHeading = document.querySelector(".toggle-heading");

const elements = [body, toggleHeading, toggleTheme];

document.onload = defaultTheme();

toggleTheme.addEventListener("click", () => {
  changeTheme();
});

function defaultTheme() {
  const isDarkActive = localStorage.getItem("dark");
//   console.log(isDarkActive);
  
  if (isDarkActive) {
    changeTheme();
  }
}

function changeTheme(){
  elements.forEach((item) => {
    if (item.classList.contains("dark")) {
      item.classList.remove("dark");
    } else {
      item.classList.add("dark");
    }
  });

  if (elements.some((item) => item.classList.contains("dark"))) {
    localStorage.setItem("dark", true);
  } else localStorage.setItem("dark",false);
};
