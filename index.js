const mobileModal = document.querySelector(".mobile-modal");

const mobileHamburger = document.querySelector(".hamburger");

const hamburgerImage = document.querySelector(".hamburger img");

let isMobileModalOpen = false;

mobileHamburger.addEventListener("click", () => {
    if (!isMobileModalOpen) {
        mobileModal.showModal();
        isMobileModalOpen = true;

        // change hamburger image to close image
        hamburgerImage.src = "./images/icon-close.svg";
    } else {
        mobileModal.close();
        isMobileModalOpen = false;

        // change close image to hamburger image
        hamburgerImage.src = "./images/icon-hamburger.svg";
    }
});

// Close modal when user clicks outside of modal

mobileModal.addEventListener("click", (e) => {
    if (e.target === mobileModal) {
        mobileModal.close();
        isMobileModalOpen = false;

        // change close image to hamburger image
        hamburgerImage.src = "./images/icon-hamburger.svg";
    }
});
