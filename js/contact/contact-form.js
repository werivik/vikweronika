document.getElementById('submitEmail').addEventListener('click', async function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    emailInput.style.backgroundColor = '';
    subjectInput.style.backgroundColor = '';

    const email = emailInput.value.trim();
    const message = subjectInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || message === '') {
        if (!emailRegex.test(email)) emailInput.style.backgroundColor = 'red';
        if (message === '') subjectInput.style.backgroundColor = 'red';
        errorMessage.style.display = 'block';
        return;
    }

    const formData = {
        to_name: 'Your Name',
        from_email: email,
        message: message,
    };

    try {
        const response = await axios.post('http://localhost:3000/send-email', formData);
        successMessage.style.display = 'block';
        emailInput.value = '';
        subjectInput.value = '';
    } 
    
    catch (error) {
        errorMessage.textContent = 'Failed to send Message, please try again.';
        errorMessage.style.display = 'block';
    }
});
