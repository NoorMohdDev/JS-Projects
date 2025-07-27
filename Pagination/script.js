const data = [
  "Wireless Earbuds",
  "Smartphone",
  "Laptop",
  "Smartwatch",
  "Bluetooth Speaker",
  "Gaming Mouse",
  "Mechanical Keyboard",
  "4K Monitor",
  "External Hard Drive",
  "USB-C Charger",
  "LED Desk Lamp",
  "Ergonomic Chair",
  "Standing Desk",
  "Coffee Maker",
  "Air Fryer",
  "Blender",
  "Vacuum Cleaner",
  "Robot Mop",
  "Microwave Oven",
  "Electric Kettle",
  "Backpack",
  "Travel Suitcase",
  "Leather Wallet",
  "Sunglasses",
  "Wrist Watch",
  "Running Shoes",
  "Sports Jacket",
  "Fitness Tracker",
  "Yoga Mat",
  "Dumbbell Set",
  "Electric Guitar",
  "Acoustic Guitar",
  "Digital Piano",
  "Drum Kit",
  "Violin",
  "HD Projector",
  "Streaming Stick",
  "Smart TV",
  "Soundbar",
  "Home Theater System",
  "Graphic Tablet",
  "3D Printer",
  "Laser Printer",
  "Scanner",
  "Photo Camera",
  "DSLR Lens",
  "Tripod Stand",
  "Action Camera",
  "Drone",
  "VR Headset",
  "Hair Dryer",
  "Hair Straightener",
  "Electric Shaver",
  "Beard Trimmer",
  "Massage Gun",
  "Camping Tent",
  "Sleeping Bag",
  "Hiking Boots",
  "Portable Stove",
  "Binoculars",
  "Cookware Set",
  "Cutlery Set",
  "Dinnerware Set",
  "Non-stick Pan",
  "Pressure Cooker",
  "Study Table",
  "Bookshelf",
  "Recliner Sofa",
  "Wardrobe",
  "Bed Frame",
  "Novel Book",
  "Cookbook",
  "Self-help Book",
  "Science Fiction Book",
  "Children’s Story Book",
  "Perfume",
  "Deodorant",
  "Body Lotion",
  "Shampoo",
  "Face Cream",
  "Tablet",
  "E-Reader",
  "Wireless Router",
  "Modem",
  "Network Switch",
  "Smart Bulb",
  "Smart Plug",
  "Thermostat",
  "Security Camera",
  "Door Lock",
  "Tool Kit",
  "Electric Drill",
  "Screwdriver Set",
  "Hammer",
  "Measuring Tape",
  "Car Vacuum",
  "Dash Camera",
  "Car Phone Holder",
  "Air Freshener",
  "Tire Inflator",
];

const limit = 10;
let dataLimit = 1;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const paginationWrapper = document.querySelector(".pagination-wrapper");

loadPaginationBtn();

const pagination = document.querySelectorAll(".pagination");

loadData();

pagination.forEach((element) => {
  element.addEventListener("click", loadData);
});

next.addEventListener("click", loadData);

function loadData(e) {
  pagination[dataLimit - 1].classList.add("active");

  let skip = 0;

  if (e) {
    if (
      e.target.innerText === prev.innerText &&
      dataLimit >0
    ) {
      dataLimit--;
    } else if (
      e.target.innerText === next.innerText &&
      dataLimit <pagination.length
    ) {
      dataLimit++;
    } else dataLimit = Number(e.target?.innerText);
    skip = (dataLimit - 1) * limit;
  }

  activePagination(dataLimit);
  toggleDisable(dataLimit, pagination);

  loadHelper(limit < data.length ? limit * dataLimit : data.length, skip);
}

function activePagination(dataLimit) {
  pagination.forEach((element) => {
    if (element.classList.contains("active"))
      element.classList.remove("active");
  });
  pagination[dataLimit - 1].classList.add("active");
}
function toggleDisable(dataLimit, pagination) {
  if (dataLimit > 1 && dataLimit < pagination.length) {
    prev.classList?.remove("disable");
    next.classList?.remove("disable");
    prev.addEventListener('click',loadData)
    next.addEventListener('click',loadData)
  }

  if (dataLimit === 1) {
    prev.classList.add("disable");
    prev.removeEventListener('click',loadData)
} else {
    prev.addEventListener('click',loadData)
    prev.classList.remove("disable");
}

if (dataLimit === pagination.length) {
    next.classList.add("disable");
    next.removeEventListener('click',loadData)
} else {
      next.addEventListener('click',loadData)
    next.classList.remove("disable");
  }

  if (pagination.length === 1) {
    prev.classList.add("disable");
    next.classList.add("disable");
    prev.removeEventListener('click',loadData)
    next.removeEventListener('click',loadData)
  }
}

function loadHelper(limit, skip) {
  const elementWrapper = document.createElement("div");
  elementWrapper.classList.add("pagination-data");
  paginationWrapper.insertAdjacentElement("beforebegin", elementWrapper);

  document.body.replaceChild(
    elementWrapper,
    document.querySelector(".pagination-data")
  );

  for (let i = skip; i < limit && i < data.length; i++) {
    const element = document.createElement("div");
    element.innerHTML = `<p>${data[i]}</p>`;
    element.classList.add("pagination-item");

    elementWrapper.appendChild(element);
  }
}

function loadPaginationBtn() {
  let btn = 0;
  if (data.length < limit) {
    btn = 1;
  } else {
    btn = Math.ceil(data.length / limit);
  }

  for (let i = 1; i <= btn; i++) {
    const element = document.createElement("button");
    element.type = "button";
    element.innerText = `${i}`;
    element.classList.add("pagination");

    paginationWrapper.insertBefore(element, next);
  }
}
