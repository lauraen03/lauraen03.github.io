
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


document.addEventListener('DOMContentLoaded', populateContactInfo);
