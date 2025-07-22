const categories = [
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
  
  function loadFilterButton(params) {
    filterButtons.innerHTML =
    `<button>All</button>` +
    categories
      .map(
        (item) => `
      <button>${item}</button>
      `
      )
      .join(" ");
  }
  
 