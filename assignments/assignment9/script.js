const quotes = [
    "It is during our darkest moments that we must focus to see the light. ~Aristotle",
    "Our greatest glory is not in never falling, but in rising every time we fall. ~Oliver Goldsmith",
    "Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth. ~Henry David Thoreau",
    "Success is stumbling from failure to failure with no loss of enthusiasm. ~Winston Churchill",
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. ~Maya Angelou",
];

let quoteIndex = 0;
const quoteElement = document.getElementById("quote");
quoteElement.innerText = quotes[quoteIndex];

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.innerText = quotes[quoteIndex];
}

setInterval(changeQuote, 2000);

function createRainbow() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const rainbowContainer = document.getElementById("rainbow-container");
    const potOfGold = document.getElementById("pot-of-gold");

    function addColorStripe(index) {
        if (index < colors.length) {
            setTimeout(() => {
                const stripe = document.createElement("div");
                stripe.className = "stripe";
                stripe.style.backgroundColor = colors[index];
                rainbowContainer.appendChild(stripe);
                addColorStripe(index + 1);
            }, 1000);
        } else {
            setTimeout(() => {
                potOfGold.style.display = "block";
            }, 1000);
        }
    }

    addColorStripe(0);
}

