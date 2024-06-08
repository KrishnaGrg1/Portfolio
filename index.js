// darkmode.js - JavaScript for toggling dark mode

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle'); // The dark mode toggle button
    const body = document.body; // The body of the document

    // Listen for a click event on the toggle button
    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode'); // Toggle the 'dark-mode' class on the body
    });
});
