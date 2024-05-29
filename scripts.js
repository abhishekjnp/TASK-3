document.getElementById('myForm').addEventListener('submit', function(event) {
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Name validation
    if (name.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        valid = false;
    }

    // Email validation
    if (!email.validity.valid) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});
