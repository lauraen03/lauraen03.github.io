
document.addEventListener('DOMContentLoaded', async function () {
    const imageElement = document.querySelector('.image-section img');
    
    try {
       
        const response = await fetch('image.json');
        
        if (!response.ok) {
            throw new Error('Failed to fetch image JSON');
        }
        
        const data = await response.json();
        const imagePath = data.imagePath;
        
      
        imageElement.src = imagePath;
    } catch (error) {
        console.error('Error loading image:', error);
    }
    
   
});




document.addEventListener('DOMContentLoaded', function () {
    const reviewForm = document.getElementById('reviewForm');
    const customerReviews = document.querySelector('.customer-reviews');

    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('reviewText').value;

        
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review';
        reviewElement.innerHTML = `
            <p><strong>${name}</strong> (Rating: ${rating}):</p>
            <p>${reviewText}</p>
        `;

        
        customerReviews.appendChild(reviewElement);

        
        reviewForm.reset();
    });
});
