const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedbackText = document.getElementById('feedback-text').value;
    if (feedbackText) {
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    } else {
        alert('Please enter your feedback before submitting.');
    }
});