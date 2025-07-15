const postListContainer = document.querySelector(".posts-list-container");
const apiURL = "https://jsonplaceholder.typicode.com/posts";

const showData = (apiResponse) => {
  postListContainer.innerHTML = apiResponse
    .map(
      ({ title, body }) =>
        `
    <div class="post-item">
        <h1>${title}</h1>
        <p>${body}</p>
    </div>
    `
    )
    .join(" ");
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

// xhrApiCall();

const fetchApiCall = () => {
  const fetchResponse = fetch(apiURL, {
    method: "GET",
  });

  fetchResponse
    .then((res) => res.json())
    .then((res) => showData(res))
    .catch((e) => console.log(e));
};

// fetchApiCall();

const fetchAsyncAwait = async () => {
  const fetchResponse = await fetch(apiURL, {
    method: "GET",
  });

  const res = await fetchResponse.json();
  showData(res);
};

// fetchAsyncAwait();

const auxilaryMethod = (method, API) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, API);
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        res(xhr.response);
        //   console.log("APi fetched successfully", xhr.response);
      } else {
        rej(xhr.response)
      }
    };
  });
};

const fetchAsyncAwaitAndXHR = async () => {

  await auxilaryMethod("GET", apiURL)

};

fetchAsyncAwaitAndXHR()
