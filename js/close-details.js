document.addEventListener("DOMContentLoaded", function () {
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach((details) => {
        details.addEventListener("click", function () {
            detailsElements.forEach((otherDetails) => {
                if (otherDetails !== details) {
                    otherDetails.removeAttribute("open");
                }
            });
        });
    });
});