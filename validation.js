const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const repeat_password_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevents the form from submitting

    // Reset error message and styles
    error_message.innerText = '';
    document.querySelectorAll('.incorrect').forEach(el => el.classList.remove('incorrect'));

    // Get errors
    const errors = getLoginFormErrors(
        firstname_input.value,
        email_input.value,
        password_input.value,
        repeat_password_input.value
    );

    // If errors exist, display them and stop form submission
    if (errors.length > 0) {
        error_message.innerText = errors.join(". ");
    } else {
        // Form can be submitted if no errors
        form.submit();
    }
});

function getLoginFormErrors(email, password) {
    let errors = [];
    if (!email) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (!password) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');

    return errors;
}


}
const allInputs = [firstname_input, email_input, password_input, repeat_password_input].filter(input => input != null);

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorrect')) {
            input.parentElement.classList.remove('incorrect');
            error_message.innerText = ''
        }
    });
});