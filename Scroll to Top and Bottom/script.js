const scrollBottom = document.querySelector(".scroll-bottom");
const scrollTop = document.querySelector(".scroll-top");
const loader = document.querySelector(".loader");
const userContainer = document.querySelector(".users-list");

loadUsers();

scrollBottom.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: -document.body.scrollHeight,
    behavior: "smooth",
  });
});

async function loadUsers() {
  loader.classList.add("show");

  try {
    let response = await fetch("https://dummyjson.com/users?limit=100", {
      method: "GET",
    });

    response = await response?.json();
    console.log(response);

    userContainer.innerHTML = response.users
      ?.map(
        (user) =>
          `<h2>${user.firstName} ${user.maidenName} ${user.lastName}</h2>`
      )
      .join(" ");
    userContainer.classList.remove("hide");
    loader.classList.remove("show");
  } catch (error) {
    console.log(error);
  }
}
