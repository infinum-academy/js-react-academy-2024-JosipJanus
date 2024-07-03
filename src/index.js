function saveReviewToLocalStorage(review, renderCallback) {
    const currentReviews = getReviewsFromLocalStorage();
    currentReviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(currentReviews));
    renderCallback(review);
}

function getReviewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('reviews'));
}

function postReview() {
    const reviewTextElement = document.getElementById('review');
    const ratingElement = document.querySelector('input[name="rating"]:checked');
    const review = {
        review: reviewTextElement.value,
        rating: ratingElement.value
    };

    if (!review.review || !review.rating) {
        return;
    }

    reviewTextElement.value = '';
    ratingElement.checked = false;
    saveReviewToLocalStorage(review, renderReview);
}

function renderReview(review) {
    const commentsFeedElement = document.getElementById('feed');
    commentsFeedElement.appendChild(createCommentCardElement(review));
    calculateAverageRating();
}

function calculateAverageRating() {
    const reviews = getReviewsFromLocalStorage();
    const totalRating = reviews.reduce((acc, review) => acc + Number(review.rating), 0);
    console.log('Total rating:', totalRating);
    document.getElementById('average-rating').innerText = `Average rating: ${totalRating / reviews.length}`;
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

    starRateElement = document.createElement('div');

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.innerHTML = '&#9733;';
        if (i <= review.rating) {
            star.classList.add('checked');
        }

        starRateElement.appendChild(star);
    }

    card.appendChild(ratingElement);
    card.appendChild(starRateElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        card.remove();
        deleteReviewFromLocalStorage(review);
        calculateAverageRating();
    }
    deleteButton.classList.add('delete-button');
    card.appendChild(deleteButton);
    return card;
}

function deleteReviewFromLocalStorage(review) {
    const currentReviews = getReviewsFromLocalStorage();
    const updatedReviews = currentReviews.filter((r) => r.review != review.review && r.rating !== review.rating);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    postReview();
});

document.addEventListener('DOMContentLoaded', () => {
    const reviews = getReviewsFromLocalStorage();
    if (!reviews || reviews.length === 0) {
        localStorage.setItem('reviews', JSON.stringify([{
            review: 'Best movie in entire Yugoslav history',
            rating: 5
        }]));
    }

    reviews.forEach((review) => {
        renderReview(review);
    });
});
