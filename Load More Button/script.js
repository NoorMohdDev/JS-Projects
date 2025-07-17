const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");
let currentProducts = 15;
let limit = 10;
let products = [];

document.onload = fetchProduct(
  limit,
  currentProducts === 0 ? 0 : currentProducts * limit
);

async function fetchProduct(limit, skip) {
  let productsList = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      method: "GET",
    }
  );

  productsList = await productsList.json();
  if (productsList.total > 0) {
    products = productsList;
  }
  console.log(products);
}

loadMoreBtn.addEventListener("click", () => {
  if (products.limit === limit) {
    fetchProduct(limit, currentProducts === 0 ? 0 : ++currentProducts * limit);
  }
});
