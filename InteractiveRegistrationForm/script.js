// Get references to the form and elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

// Error messages elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Toggle password visibility
togglePasswordButton.addEventListener('click', () => {
    const currentType = passwordInput.type;
    passwordInput.type = currentType === 'password' ? 'text' : 'password';
    togglePasswordButton.textContent = currentType === 'password' ? 'Hide Password' : 'Show Password';
});

// Form validation
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to allow validation

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    // If the form is valid, show a success message (you can also submit the form here)
    if (isValid) {
        alert('Registration successful!');
        form.reset();
    }
});
