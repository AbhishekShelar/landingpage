document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Convert FormData to JSON
    const formDataJSON = {};
    formData.forEach((value, key) => {
        formDataJSON[key] = value;
    });

    // Send form data to the server
    fetch('https://your-api-endpoint.com/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataJSON),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
        console.log('Form submitted successfully:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        // Handle errors
        console.error('Error submitting form:', error);
        alert('Error submitting form. Please try again later.');
    });
});
