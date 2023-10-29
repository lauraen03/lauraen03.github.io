document.addEventListener("DOMContentLoaded", function() {
    const productTypeSelect = document.getElementById("product-type");
    const specificProductSelect = document.getElementById("specific-product");
    const quantityInput = document.getElementById("quantity");
    const addToOrderButton = document.getElementById("add-to-order-button");
    const orderList = document.getElementById("order-list");

  
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


    populateSpecificProducts();
});
