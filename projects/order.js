document.addEventListener("DOMContentLoaded", function() {
    const productTypeSelect = document.getElementById("product-type");
    const specificProductSelect = document.getElementById("specific-product");
    const quantityInput = document.getElementById("quantity");
    const addToOrderButton = document.getElementById("add-to-order-button");
    const orderList = document.getElementById("order-list");
    const imageContainer = document.getElementById("image-container"); // Add an element with the ID "image-container" where you want to display the image.

    // Define the URL of the hosted JSON file
    const jsonUrl = "https://example.com/path/to/image.json"; // Replace with your JSON file URL.

    // Async function to load JSON data
    async function loadImage() {
        try {
            const response = await fetch(jsonUrl); // Fetch JSON data from the URL.
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const imageData = await response.json();
            const imagePath = imageData.imagePath;

            // Create an image element
            const image = document.createElement("img");
            image.src = imagePath;
            image.alt = "Your Image Alt Text"; // Replace with appropriate alt text
            image.className = "your-image-class"; // Add any CSS class for styling

            // Append the image to the image container
            imageContainer.appendChild(image);
        } catch (error) {
            console.error("Error loading image:", error);
        }
    }

    // Call the function to load and display the image
    loadImage();

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
