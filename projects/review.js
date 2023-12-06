document.addEventListener('DOMContentLoaded', async function () {
    // Fetch and display reviews
    await fetchReviews();

    const reviewForm = document.getElementById('reviewForm');
    const customerReviews = document.querySelector('.customer-reviews');

    reviewForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const reviewText = document.getElementById('reviewText').value;

        const reviewIdField = document.getElementById('reviewId');

        if (reviewIdField.value) {
          
            const reviewId = reviewIdField.value;

        
            await editReview(reviewId, { name, rating, reviewText });

           
            await fetchReviews();

            
            reviewForm.reset();
            reviewIdField.value = '';
        } else {
          
            await addReview({ name, rating, reviewText });

            await fetchReviews();

           
            reviewForm.reset();
        }
    });

   
    customerReviews.addEventListener('click', async function (event) {
        if (event.target.classList.contains('edit-button')) {
            const reviewId = event.target.dataset.reviewId;

           
            const newName = prompt('Enter new name:');
            const newRating = prompt('Enter new rating (1-5):');
            const newReviewText = prompt('Enter new review:');

            
            if (newName !== null && newRating !== null && newReviewText !== null) {
                
                await editReview(reviewId, { name: newName, rating: newRating, reviewText: newReviewText });

              
                await fetchReviews();
            }
        } else if (event.target.classList.contains('delete-button')) {
            const reviewId = event.target.dataset.reviewId;

          
            await deleteReview(reviewId);

            
            await fetchReviews();
        }
    });
});


async function getReviewById(reviewId) {
    try {
        const response = await fetch(`/api/reviews/${reviewId}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching review by ID: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching review by ID:', error);
        return null; 
    }
}

async function fetchReviews() {
    try {
        const response = await fetch('/api/reviews');
        const data = await response.json();

        const customerReviews = document.querySelector('.customer-reviews');
        customerReviews.innerHTML = '';

        data.forEach(review => {
            const reviewElement = createReviewElement(review);
            customerReviews.appendChild(reviewElement);
        });
    } catch (error) {
        console.error('Error fetching reviews:', error);
    }
}

async function addReview(reviewData) {
    try {
        await fetch('/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });
    } catch (error) {
        console.error('Error adding review:', error);
    }
}

async function editReview(reviewId, reviewData) {
    try {
        const response = await fetch(`/api/reviews/${reviewId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        });

        if (!response.ok) {
            throw new Error(`Error editing review: ${response.statusText}`);
        }

        const updatedReview = await response.json();
        return updatedReview;
    } catch (error) {
        console.error('Error editing review:', error);
    }
}

async function deleteReview(reviewId) {
    try {
        await fetch(`/api/reviews/${reviewId}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error deleting review:', error);
    }
}

function createReviewElement(review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.id = `review-${review._id}`;
    reviewElement.innerHTML = `
        <p><strong>${review.name}</strong> (Rating: ${review.rating}):</p>
        <p>${review.reviewText}</p>
        <button class="edit-button" data-review-id="${review._id}">Edit</button>
        <button class="delete-button" data-review-id="${review._id}">Delete</button>
    `;
    return reviewElement;
}
