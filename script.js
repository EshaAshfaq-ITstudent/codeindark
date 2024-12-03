// Function to handle card click
function moveCard(card) {
    // Get all cards
    const cards = document.querySelectorAll('.card');
    
    // Loop through all cards and blur the non-clicked ones
    cards.forEach(function(otherCard) {
        if (otherCard !== card) {
            otherCard.classList.add('blurred'); // Add blur class
            otherCard.classList.remove('focused'); // Remove focused class from other cards
        }
    });
    
    // Make the clicked card clear and focused
    card.classList.add('focused');
    card.classList.remove('blurred'); // Ensure the clicked card is not blurred
}
const movingText = document.getElementById('movingText');
const texts = ['Presented by', 'Organized by', 'Produced by'];
let index = 0;
setInterval(() => {
    movingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}, 2000);