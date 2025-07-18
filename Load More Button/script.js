const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");
let currentProducts = 0;
let limit = 10;
let products = [{}];

document.onload = fetchProduct(
  limit,
  currentProducts === 0 ? 0 : currentProducts * limit
);

async function fetchProduct(limit, skip) {
  try {
    let productsList = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      {
        method: "GET",
      }
    );

    productsList = await productsList.json();
    if (productsList.total > 0) {
      products[0] = productsList.limit;
      products = products.concat(productsList.products);
      loadProducts();
    }
  } catch (error) {
    console.log(error);
  }
}

const loadProducts = () => {
  if (products?.length > 0) {
    productsContainer.innerHTML = products
      .map(({ thumbnail, title, price, availabilityStatus }) => {
        if ((thumbnail, title, price, availabilityStatus)) {
          return `
          <div style="border:1px solid black; padding: 10px">
          <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
          <div>
            <img
              src=${thumbnail}
              alt="test"
              width="300"
              height="300"
              className="rounded-t-xl w-full"
            />
          </div>
          <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold ">${title}</h1>
              <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
              <p>${price}</p>
              <p>${availabilityStatus}</p>
            </div>
          </div>
        </div></div>
      `;
        }
      })
      .join(" ");
  }

  if (products[0] !== limit) {
    loadMoreBtn.setAttribute("disabled", null);
    loadMoreBtn.innerText = "No More Products";
  }
};

loadMoreBtn.addEventListener("click", () => {
  if (products[0] === limit) {
    fetchProduct(limit, ++currentProducts * limit);
  }
});
