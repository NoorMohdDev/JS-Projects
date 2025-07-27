const gitHubBaseURL = "https://api.github.com/users/";
const search = document.querySelector("#search-btn");
const findProfile = document.querySelector(".find-profile");
const profileImg = document.querySelector(".profile-img");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repo = document.querySelector(".repo");
const username = document.querySelector(".username");
const profileContainer = document.querySelector(".profile-container");
const loader = document.querySelector(".loader");

search.addEventListener("input", (e) => {
  search.value = e.target.value;
});

findProfile.addEventListener("click", () => {
  if (search.value==="") {
    loader.style.display="block"
    profileContainer.style.display="none"
      loader.innerText = "Please! Provide Valid Input";
    } else {
      loadProfile();
  }
});
console.log(search.value);

function loadProfile() {
  loader.innerText = "Loading Please Wait...";
  loader.style.display = "block";
  fetchProfile()
}

async function fetchProfile() {
    try {
        let res = await fetch(`${gitHubBaseURL}${search.value}`, {
          method: "GET",
        });
        res = await res?.json();
    
        if (res) {
          profileImg.src = res.avatar_url;
          username.innerText = res.login;
          repo.innerText = res.public_repos;
          followers.innerText = res.followers;
          following.innerText = res.following;
          loader.style.display = "none";
          profileContainer.style.display = "block";
          search.value = "";
        }
      } catch (error) {
        search.value = "";
        profileContainer.style.display = "none";
        loader.innerText = " Error Occured! Please Try Again.";
        console.log(error);
      }
}