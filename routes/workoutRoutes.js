const reviewRoutes = require('express').Router();

// In-memory reviews array for demonstration purposes
let reviews = [];
reviewRoutes.get('/', (req, res) => {
    res.json(reviews);
});

reviewRoutes.post('/', (req, res) => {
    const newReview = req.body;
    reviews.push(newReview);
    res.status(201).json(newReview);
});
reviewRoutes.put('/:id', (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const updatedReview = req.body;
    const index = reviews.findIndex(r => r.id === reviewId);    
    if (index !== -1) {
        reviews[index] = updatedReview;
        res.json(updatedReview);
    } else {
        res.status(404).json({ error: 'Review not found' });
    }
});
reviewRoutes.delete('/:id', (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    reviews = reviews.filter(r => r.id !== reviewId);
    res.status(204).end();
});
module.exports = reviewRoutes;

