document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let valid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Invalid email address.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('emailError').innerText = '';
        document.getElementById('emailError').style.display = 'none';
    }

    // Phone validation
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be 10 digits.';
        document.getElementById('phoneError').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('phoneError').innerText = '';
        document.getElementById('phoneError').style.display = 'none';
    }

    if (valid) {
        document.getElementById('result').innerText = 'Form submitted successfully!';
    } else {
        document.getElementById('result').innerText = 'Please correct the errors above.';
    }
});
