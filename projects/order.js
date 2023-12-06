document.addEventListener("DOMContentLoaded", function() {
    const productTypeSelect = document.getElementById("product-type");
    const specificProductSelect = document.getElementById("specific-product");
    const quantityInput = document.getElementById("quantity");
    const addToOrderButton = document.getElementById("add-to-order-button");
    const orderList = document.getElementById("order-list");
    const orderForm = document.getElementById("orderForm");

    const products = {
        Bread: ["Italian Bread", "French Bread", "Pumpernickel Bread"],
        Cakes: ["White Cake", "Yellow Cake", "Chocolate Cake", "Red Velvet Cake"],
        Macarons: ["Vanilla Macaron", "Chocolate Macaron", "Lemon Macaron", "Raspberry Macaron", "Pistachio Macaron"]
    };

    function populateSpecificProducts() {
        specificProductSelect.innerHTML = '';
        const productType = productTypeSelect.value;
        for (const product of products[productType]) {
            const option = document.createElement("option");
            option.value = product;
            option.text = product;
            specificProductSelect.appendChild(option);
        }
    }

    productTypeSelect.addEventListener("change", function() {
        populateSpecificProducts();
    });

    addToOrderButton.addEventListener("click", function() {
        const productType = productTypeSelect.value;
        const specificProduct = specificProductSelect.value;
        const quantity = quantityInput.value;

        const listItem = document.createElement("li");
        listItem.textContent = `${quantity} x ${specificProduct} (${productType})`;
        orderList.appendChild(listItem);
    });

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(orderForm);

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log("Order submitted successfully", data);
            const messages = document.getElementById('formMessages');
            messages.innerHTML = 'Order submitted successfully!';
            orderForm.reset();
        })
        .catch(error => {
            console.error("Error submitting order", error);
            const messages = document.getElementById('formMessages');
            messages.innerHTML = 'An unexpected error occurred. Please try again later.';
        });
    });

    populateSpecificProducts();
});
