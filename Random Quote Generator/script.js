const apiURL = "https://dummyjson.com/quotes/random";

const quoteWrapper = document.querySelector(".quote-wrapper");
const refreshButton = document.querySelector(".refresh-button");
const loader = document.querySelector(".loader");

document.onload = generateRandomQuote();

function generateRandomQuote() {
  const quote = fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      showQuote(res);
      loader.classList.remove("show");
      quoteWrapper.classList.remove("hide");
    })
    .catch((e) => console.log(e));
}

function showQuote({ quote, author }) {
  quoteWrapper.innerHTML = `
    <div class="quote-item">
    <h1>${quote}</h1>
    <h3>${author}</h3>
    </div>
    `;
}

refreshButton.addEventListener("click", () => {
  loader.classList.add("show");
  quoteWrapper.classList.add("hide");
  generateRandomQuote();
});

