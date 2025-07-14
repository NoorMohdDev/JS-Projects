const postListContainer = document.querySelector(".posts-list-container");
const apiURL = "https://jsonplaceholder.typicode.com/posts";

const showData = (apiResponse) => {
  postListContainer.innerHTML = apiResponse.map(({title,body}) =>
    `
    <div>
        <h1>${title}</h1>
        <p>${body}</p>
    </div>
    `
  ).join(" ");
};

const xhrApiCall = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiURL);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      showData(xhr.response);
      //   console.log("APi fetched successfully", xhr.response);
    } else {
      throw new Error(500, "API fetch failed!");
    }
  };
};
xhrApiCall();

// showData();
