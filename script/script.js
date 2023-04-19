// Get all the bikcraft, iris, and illustration elements
const bikcraft = document.querySelector(".bikcraft");
const iris = document.querySelector(".iris");
const illustration = document.querySelector(".illustration");

// Add an event listener to each element
[bikcraft, iris, illustration].forEach((element) => {
  element.addEventListener("click", function (event) {
    // Check if the screen is smaller than 940px
    if (window.innerWidth < 940) {
      // Get the overlay element inside the clicked element
      const overlay = event.currentTarget.querySelector(".overlay");
      // Add the 'show' class to the overlay element
      overlay.classList.add("show");
    }
  });
});

// Add an event listener to the document
document.addEventListener("click", function (event) {
  // Get all the overlay elements
  const overlays = document.querySelectorAll(".overlay");
  // Loop through each overlay element
  overlays.forEach((overlay) => {
    // Check if the clicked element is outside the parent element and overlay element
    if (
      !overlay.parentElement.contains(event.target) &&
      !overlay.contains(event.target)
    ) {
      // Remove the 'show' class from the overlay element
      overlay.classList.remove("show");
    }
  });
});
