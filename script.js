const openModal = () => {
    toggleModal("block");
}

const closeModal = () => {
    toggleModal("none");
}

const toggleModal = (displayValue) => {
    const shareModal = document.getElementById("shareModal");

    shareModal.style.display = displayValue;
    shareModal.addEventListener("click", openModal);
    shareModal.addEventListener("click", closeModal);
}
