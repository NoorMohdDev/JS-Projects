const categories = [
  "All",
  "Men",
  "Women",
  "Kids",
  "Electronics",
  "Home",
  "Beauty",
  "Sports",
  "Books",
];

const items = [
  { item: "Men's T-Shirt", category: "Men" },
  { item: "Women's Dress", category: "Women" },
  { item: "Kid's Toy Car", category: "Kids" },
  { item: "Smartphone", category: "Electronics" },
  { item: "Laptop", category: "Electronics" },
  { item: "Couch", category: "Home" },
  { item: "Skincare Set", category: "Beauty" },
  { item: "Basketball", category: "Sports" },
  { item: "Fiction Novel", category: "Books" },
  { item: "Men's Jacket", category: "Men" },
  { item: "Women's Handbag", category: "Women" },
  { item: "Kids Backpack", category: "Kids" },
  { item: "Smartwatch", category: "Electronics" },
  { item: "Blender", category: "Home" },
  { item: "Lipstick", category: "Beauty" },
  { item: "Running Shoes", category: "Sports" },
  { item: "Cookbook", category: "Books" },
  { item: "Men's Sneakers", category: "Men" },
  { item: "Women's Sunglasses", category: "Women" },
  { item: "Kids Puzzle", category: "Kids" },
  { item: "Bluetooth Speaker", category: "Electronics" },
  { item: "Table Lamp", category: "Home" },
  { item: "Hair Dryer", category: "Beauty" },
  { item: "Yoga Mat", category: "Sports" },
  { item: "Science Magazine", category: "Books" },
];

const filterButtons = document.querySelector(".filter-buttons");
const content = document.querySelector(".content");

let filter = categories[0];

loadFilterButton();
loadContent(filter);
addFilterListener()

function addFilterListener() {
  document.querySelectorAll(".filter-buttons button").forEach((element) => {
    element.addEventListener("click", ()=>{
        filter=element.innerHTML
        loadContent(filter)
    });
  });
}

function loadFilterButton() {
  filterButtons.innerHTML = categories
    .map(
      (item) => `
      <button>${item}</button>
      `
    )
    .join(" ");
}

function loadContent(value) {
  if (value === "All") {
    value = items;
  } else {
    value = items.filter(filterContent);
  }
  content.innerHTML = value
    .map(
      ({ category, item }) => `
      <div class="card">
          <h3>${category}</h3>
          <p>${item}</p>
      </div>
      `
    )
    .join(" ");
}

function filterContent(item) {
  return item.category === filter;
}
