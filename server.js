const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/projects', express.static(path.join(__dirname, 'projects')));

mongoose
  .connect("mongodb+srv://lauraen03:Katielaura12@bakery.l8vztox.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log("Couldn't connect to MongoDB", error));

const reviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  reviewText: String,
});

const Review = mongoose.model('Review', reviewSchema);

app.use(express.static(__dirname + '/projects'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/projects/review.html');
});

app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/api/reviews', async (req, res) => {
  try {
    const { name, rating, reviewText } = req.body;

    const newReview = new Review({
      name,
      rating,
      reviewText,
    });

    const result = await newReview.save();
    res.status(200).json(result);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(400).send('Error adding review');
  }
});

app.put('/api/reviews/:id', async (req, res) => {
  try {
    const reviewId = req.params.id;
    const { name, rating, reviewText } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { name, rating, reviewText },
      { new: true } 
    );

    res.status(200).json(updatedReview);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(400).send('Error updating review');
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  try {
    const reviewId = req.params.id;
    const result = await Review.findByIdAndDelete(reviewId);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(400).send('Error deleting review');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
