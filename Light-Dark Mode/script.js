const toggleTheme = document.querySelector(".toggle-theme");
const body = document.querySelector("body");
const toggleHeading = document.querySelector(".toggle-heading");

const elements = [body,toggleHeading,toggleTheme]

toggleTheme.addEventListener("click", () => {
  changeTheme();
});

const changeTheme = () => {
    elements.forEach(item =>{
        if (item.classList.contains("dark")) {
            item.classList.remove("dark")
        }
        else{
            item.classList.add("dark")
        }
})};
