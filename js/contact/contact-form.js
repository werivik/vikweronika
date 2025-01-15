emailjs.init('');

document.getElementsById('submitEmail').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    emailInput.style.backgroundColor = '';
    subjectInput.style.backgroundColor = '';

    const email = emailInput.value.trim();
    const message = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || message === '') {
        if (!emailRegex.test(email)) emailInput.style.backgroundColor = 'red';
        if (message === '') subjectInput.style.backgroundColor = 'red';
        errorMessage.style.display = 'block';
        return;
    }

    const templateParams = {
        email: email,
        message: message
    };

    emailjs.send('', '', templateParams)
    .then(() => {
        successMessage.style.display = 'block';
        emailInput.value = '';
        subjectInput.value = '';
    })

    .catch(() => {
        errorMessage.textContent = 'Failed to send Message, please try again.';
        errorMessage.style.display = 'block';
    });
});