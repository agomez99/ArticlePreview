const openModal = () => {
    toggleModal("block");
}

const closeModal = () => {
    toggleModal("none");
}

const outsideClick = (e) => {
    if (e.target !== document.getElementById("shareModal")) {
        console.log("click");
        closeModal();
    }
}

const toggleModal = (displayValue) => {
    const shareModal = document.getElementById("shareModal");

    shareModal.style.display = displayValue;
    shareModal.addEventListener("click", openModal);
    shareModal.addEventListener("click", outsideClick);
    shareModal.addEventListener("click", closeModal);
}
