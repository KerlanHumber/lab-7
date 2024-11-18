// Mouse Events
const mouseButton = document.getElementById('mouseButton');
const mouseMessage = document.getElementById('mouseMessage');

mouseButton.addEventListener('mouseover', () => {
    mouseMessage.textContent = 'Mouse is over the button';
});

mouseButton.addEventListener('mouseout', () => {
    mouseMessage.textContent = 'Mouse left the button';
});

// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyMessage  = document.getElementById('keyMessage');

keyInput.addEventListener('keydown', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});
// Form Events
const myForm = document.getElementById('myForm');
const formMessage  = document.getElementById('formMessage');

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Form submitted successfully';
});

