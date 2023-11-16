function updateTotalPrice() {
    const coffeeTypeSelect = document.getElementById("coffee-type");
    const quantityInput = document.getElementById("quantity");
    const totalPriceSpan = document.getElementById("total-price");

    const coffeePrices = {
        americano: 2.50,
        latte: 3.00,
        cappuccino: 3.50
    };

    const selectedCoffeeType = coffeeTypeSelect.value;
    const quantity = parseFloat(quantityInput.value);

    const total = coffeePrices[selectedCoffeeType] * quantity;

    totalPriceSpan.textContent = `$${total.toFixed(2)}`;
}

document.getElementById("coffee-type").addEventListener("change", updateTotalPrice);
document.getElementById("quantity").addEventListener("input", updateTotalPrice);

updateTotalPrice();

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    function updateNavbarStyle() {
        if (window.scrollY > 0) {
            navbar.classList.add("fixed-nav");
        } else {
            navbar.classList.remove("fixed-nav");
        }
    }

    window.addEventListener("scroll", updateNavbarStyle);

    const menuItems = document.querySelectorAll(".navbar a");

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("mouseenter", function () {
            menuItem.style.backgroundColor = "#444";
        });

        menuItem.addEventListener("mouseleave", function () {
            menuItem.style.backgroundColor = "";
        });
    });

    updateNavbarStyle();
});
