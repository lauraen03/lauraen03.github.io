const express = require('express');
const Joi = require('joi');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost/bakery")
  .then(() => console.log('Connected to mongodb'))
  .catch(error => console.log("Couldn't connect to mongodb", error));

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  reviewText: String,
});

const Review = mongoose.model('Review', reviewSchema);

const reviewValidationSchema = Joi.object({
  name: Joi.string().required(),
  rating: Joi.number().required().min(1).max(5),
  reviewText: Joi.string().required(),
});

// Route to get all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to add a new review
app.post('/api/add-review', async (req, res) => {
  try {
    const { name, rating, reviewText } = req.body;

    // Validate the review data
    await reviewValidationSchema.validateAsync({ name, rating, reviewText });

    const newReview = new Review({ name, rating, reviewText });
    const result = await newReview.save();
    res.status(200).send('Review added successfully');
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(400).send('Error adding review');
  }
});

// Add routes for updating and deleting reviews as needed

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



const jsonURL = 'https://lauraen03.github.io/assignments/Github/json/contact.json';


async function populateContactInfo() {
    try {
        const response = await fetch(jsonURL);
        const data = await response.json();

        const addressElement = document.getElementById('address');
        const phoneElement = document.getElementById('phone');
        const emailElement = document.getElementById('email');

        addressElement.textContent = data.address;
        phoneElement.textContent = data.phone;
        emailElement.textContent = data.email;
    } catch (error) {
        console.error('Error fetching or parsing contact data:', error);
    }
}
async function submitForm() {
    const form = document.getElementById('contactForm');
    const messages = document.getElementById('formMessages');

    
    messages.innerHTML = '';

    
    if (form.checkValidity()) {
        try {
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form),
            });

            if (response.ok) {
               
                messages.innerHTML = 'Message sent successfully!';
                form.reset();
            } else {
               
                const result = await response.json();
                messages.innerHTML = result.message;
            }
        } catch (error) {
            console.error('Error:', error);
            messages.innerHTML = 'An unexpected error occurred. Please try again later.';
        }
    } else {
       
        form.reportValidity();
    }
}



document.addEventListener('DOMContentLoaded', populateContactInfo);
