const totalSteps = 4;
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const prevStep = document.querySelector(".prev");
const nextStep = document.querySelector(".next");
const step = document.querySelector(".step");
let currentStep = 0;

nextStep.addEventListener("click", () => {
  if (currentStep >= totalSteps) {
    return;
  }

  if (currentStep >= 0) {
    currentStep++;
    step.innerHTML =`Step ${currentStep}`

    if (currentStep === totalSteps) {
      nextStep.classList.add("disable");
    }
    if (currentStep !== totalSteps) {
      prevStep.classList.remove("disable");
    }
  }

  if (currentStep > 0) {
    progress.style.width = `${
      (window.getComputedStyle(progress).maxWidth.split("px")[0] / totalSteps) *
      currentStep
    }px`;
    console.log(progress.style.width);
  }

  console.log(currentStep);
});

prevStep.addEventListener("click", () => {
  if (currentStep <= 0) {
    return;
  }

  if (currentStep <= totalSteps) {
    currentStep--;
    step.innerHTML =`Step ${currentStep}`
    
    if (currentStep > 0) {
      nextStep.classList.remove("disable");
    }
    if (currentStep === 0) {
      prevStep.classList.add("disable");
    }
  }

  if (currentStep >= 0) {
    progress.style.width = `${
      (window.getComputedStyle(progress).maxWidth.split("px")[0] / totalSteps) *
      currentStep
    }px`;
    console.log(progress.style.width);
  }
  console.log(currentStep);
});
