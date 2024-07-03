const reviews = [{
    review: 'Best movie in entire Yugoslav history',
    rating: 5
}];

function postReview() {
    const review = {
        review: document.getElementById('review').value,
        rating: document.getElementById('rating').value
    };

    console.log(review);

    if (!review.review || !review.rating) {
        return;
    }

    reviews.push(review);

    renderReview(review);
}

function renderReview(review) {
    const commentsFeedElement = document.getElementById('feed');
    commentsFeedElement.appendChild(createCommentCardElement(review))

}

function createCommentCardElement(review) {
    const card = document.createElement('div');
    card.className = ['card'];
    const reviewElement = document.createElement('div');
    reviewElement.className = ['review'];
    reviewElement.textContent = review.review;
    card.appendChild(reviewElement);

    const ratingElement = document.createElement('div');
    ratingElement.className = ['rating'];
    ratingElement.innerHTML = `Rating: ${review.rating}\/5`;
    card.appendChild(ratingElement);
    return card;
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    postReview();
});

document.addEventListener('DOMContentLoaded', () => {
    reviews.forEach((review) => {
        renderReview(review);
    });
});
