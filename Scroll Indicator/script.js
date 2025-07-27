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

const content = document.querySelector(".content");
const scrollIndicator = document.querySelector(".scroll-indicator .scroll");
console.log(scrollIndicator);

loadContent("All");

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

document.addEventListener("scroll", () => {
  // Code to get how much page get scrolled coordinates
  const scrollTop = document.documentElement.scrollTop;
  const documentScrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  scrollIndicator.style.width = `${(scrollTop/documentScrollHeight)*100}%`;
});
