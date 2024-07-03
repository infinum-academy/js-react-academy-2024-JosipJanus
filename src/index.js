const reviews = [];

function postReview() {
    console.log('Posting review...');
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    postReview();
});
