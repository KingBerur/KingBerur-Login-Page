document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = (fieldId, iconClass) => {
        const passwordField = document.querySelector(fieldId);
        const toggleIcon = document.querySelector(iconClass);

        toggleIcon.addEventListener('click', function() {
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');
            } else {
                passwordField.type = 'password';
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            }
        });
    };

    // Initialize password visibility toggle
    togglePassword('#password-field', '.toggle-password');
    togglePassword('#register-password-field', '.toggle-register-password');

    // Toggle between login and registration forms
    const toggleForms = () => {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        loginForm.classList.toggle('hidden');
        registerForm.classList.toggle('hidden');
    };

    // Attach event listener to the create account button
    document.querySelector('.txt1').addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms();
    });

    // Attach event listener to the already have an account button
    document.querySelector('.txt1', '#register-form').addEventListener('click', function(event) {
        event.preventDefault();
        toggleForms();
    });
});
