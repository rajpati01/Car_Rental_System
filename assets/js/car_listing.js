document.addEventListener("DOMContentLoaded", function () {
  const brandSelect = document.getElementById("brand");
  const fuelSelect = document.getElementById("fuel");
  const searchButton = document.getElementById("search-car");
  const carListings = document.querySelectorAll(".car");
  const listingsCount = document.getElementById("listing-count");

  searchButton.addEventListener("click", filterCars);

  function filterCars() {
    const selectedBrand = brandSelect.value;
    const selectedFuel = fuelSelect.value;
    let visibleCount = 0;

    carListings.forEach((car) => {
      const carBrand = car.getAttribute("data-brand");
      const carFuel = car.getAttribute("data-fuel");

      if (
        (selectedBrand === "" || selectedBrand === carBrand) &&
        (selectedFuel === "" || selectedFuel === carFuel)
      ) {
        car.style.display = "block";
        visibleCount++;
      } else {
        car.style.display = "none";
      }
    });

    listingsCount.textContent = `${visibleCount} Listings`;
  }
});
