const toggleButtons = document.querySelectorAll(".openModal, .close, .submit, .close-icon")

// console.log(toggleButtons);
toggleButtons.forEach(item => item.addEventListener("click", toggleModal))

function toggleModal(e){
    const modalBackground = document.querySelector(".modal-background")

    if (e.target.classList.contains("close")) {
        modalBackground.style.display="none"
    }

    if (e.target.classList.contains("close-icon")) {
        modalBackground.style.display="none"
    }

    if (e.target.classList.contains("openModal")) {
        modalBackground.style.display="block"
    }

    if (e.target.classList.contains("submit")) {
        modalBackground.style.display="none"
    }

}
