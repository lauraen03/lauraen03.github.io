


const jsonURL = 'https://lauraen03.github.io/assignments/Github/json/contact.json';


async function populateContactInfo() {
    try {
        const response = await fetch(jsonURL);
        const data = await response.json();

        const addressElement = document.getElementById('address');
        const phoneElement = document.getElementById('phone');
        const emailElement = document.getElementById('email');

        addressElement.textContent = data.address;
        phoneElement.textContent = data.phone;
        emailElement.textContent = data.email;
    } catch (error) {
        console.error('Error fetching or parsing contact data:', error);
    }
}
async function submitForm() {
    const form = document.getElementById('contactForm');
    const messages = document.getElementById('formMessages');

    
    messages.innerHTML = '';

    
    if (form.checkValidity()) {
        try {
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: new FormData(form),
            });

            if (response.ok) {
               
                messages.innerHTML = 'Message sent successfully!';
                form.reset();
            } else {
               
                const result = await response.json();
                messages.innerHTML = result.message;
            }
        } catch (error) {
            console.error('Error:', error);
            messages.innerHTML = 'An unexpected error occurred. Please try again later.';
        }
    } else {
       
        form.reportValidity();
    }
}



document.addEventListener('DOMContentLoaded', populateContactInfo);
