// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate password strength (e.g., at least 8 characters)
function isValidPassword(password) {
    return password.length >= 6;
}

// Event listener for form submission
document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('psw');

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    if (!isValidPassword(passwordInput.value)) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
    }
});
