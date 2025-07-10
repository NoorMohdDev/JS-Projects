import { data } from "./data.js";

const categoryList = [];
const cardGroup = document.querySelector(".card-group");
const btnGroup = document.querySelector(".btn-group");
const products = data;
const searchProducts = document.querySelector(" form input[type=search]");


if (products !== null) {
  loadProducts("");
  loadCategory();
}

searchProducts.nextElementSibling.addEventListener("click", (e) => {
  e.preventDefault();
  searchByCategoryAndName(searchProducts.value);
});

searchProducts.addEventListener("input", (e) => {

  if (e.target.value.length <= 3) {
    searchByCategoryAndName(e.target.value);
  } else {
    loadProducts(categoryList[0]);
  }
});

btnGroup.addEventListener("click", (e) => {
  filterProducts(e);
});

function searchByCategoryAndName(e) {
  if (e !== "" && e !== null) {
    const searchvalue = e;

    const searchProducts = [];
    categoryList.map((x) => {
      if (
        x.substring(0, 3).toLowerCase() ===
        searchvalue.toLowerCase().substring(0, 3)
      ) {
        searchProducts.push(x);
      }
    });
    searchProducts.map((x) => {
      loadProducts(x);
    });
  } else {
    loadProducts(categoryList[0]);
  }
}

function filterProducts(e) {
  if (e.target.innerText !== "All") {
    e.target.parentElement.querySelector(".active").classList.remove("active");

    e.target.classList.add("active");
  }

  loadProducts(e.target.innerText);
}

function loadProducts(e) {
  while (cardGroup.hasChildNodes()) {
    cardGroup.removeChild(cardGroup.firstChild);
  }

  products.map((x) => {
    if (e === x.category) {
      createProduct(x);
    }

    if (e === "" || e === "All") {
      createProduct(x);

      if (!categoryList.includes(x.category)) {
        categoryList.push(x.category);
      }
    }
  });
}

function loadCategory() {
  categoryList.map((x) => {
    createCategory(x);
  });
}

function createCategory(category) {
  const categoryWrapper = document.querySelector(".btn-group");

  const categoryName = document.createElement("a");
  categoryName.href = "#";
  categoryName.className = "btn btn-primary m-1 rounded";
  categoryName.innerText = category;

  categoryWrapper.appendChild(categoryName);
}

function createProduct(product) {
  const productWrapper = document.createElement("div");

  productWrapper.className = "card rounded pt-2";

  productWrapper.innerHTML = `<div class="img-con"><img
            src=${product.image}
            class="card-img-top"
            alt="Product Image"
          /></div>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
              Category: <strong>${product.category}</strong><br />
              Price: <strong>$${product.price}</strong>
            </p>
          </div>`;

  cardGroup.appendChild(productWrapper);
}
