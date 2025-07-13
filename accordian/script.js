const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    id: 4,
    question: "What language is primarily spoken in Brazil?",
    answer: "Portuguese",
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    answer: "H₂O",
  },
  {
    id: 6,
    question: "How many continents are there on Earth?",
    answer: "Seven",
  },
  {
    id: 7,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
  },
  {
    id: 8,
    question: "Which year did World War II end?",
    answer: "1945",
  },
  {
    id: 9,
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
  },
  {
    id: 10,
    question: "What is the main ingredient in guacamole?",
    answer: "Avocado",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function parseAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataField) => `
      <div class="accordion_item">
        <div class="accordion_title">
            <h3>${dataField.question}</h3>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="accordion_content">
            <p>${dataField.answer}</p>
        </div>
      </div>
      `
    )
    .join(" ");
}

parseAccordionData();
const getAccordionTitles = document.querySelectorAll(".accordion_title");
// Add click event listener to each accordion title
// to toggle the visibility of the corresponding content

getAccordionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    const icon = title.querySelector("i");
    // Remove active class from all other accordion contents
    // and reset their icons
    const removeActive = document.querySelectorAll(".accordion_content.active");

    removeActive.forEach((activeContent) => {
      if (activeContent !== content) {
        activeContent.classList.remove("active");
        activeContent.previousElementSibling
          .querySelector("i")
          .classList.remove("fa-arrow-up");
        activeContent.previousElementSibling
          .querySelector("i")
          .classList.add("fa-arrow-down");
      }
    });

    // Toggle the active class on the clicked content
    content.classList.toggle("active");
    icon.classList.toggle("fa-arrow-up");
    icon.classList.toggle("fa-arrow-down");
  });
});
