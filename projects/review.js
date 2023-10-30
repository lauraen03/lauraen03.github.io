// review.js
document.addEventListener('DOMContentLoaded', async function () {
    const imageElement = document.querySelector('.image-section img');
    
    try {
        // Load the image.json file asynchronously using fetch
        const response = await fetch('image.json');
        
        if (!response.ok) {
            throw new Error('Failed to fetch image JSON');
        }
        
        const data = await response.json();
        const imagePath = data.imagePath;
        
        // Set the image path as the src attribute for the image element
        imageElement.src = imagePath;
    } catch (error) {
        console.error('Error loading image:', error);
    }
    
    // Your existing review form and submission code can go here
});




document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewForm');
    const customerReviews = document.querySelector('.customer-reviews');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('reviewText').value;

        // Create a new review element
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <p><strong>${name}</strong> (Rating: ${rating}):</p>
            <p>${reviewText}</p>
        `;

        // Append the new review to the customer reviews section
        customerReviews.appendChild(reviewElement);

        // Clear the form fields
        reviewForm.reset();
    });
});
