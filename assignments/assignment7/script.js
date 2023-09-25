
window.addEventListener("load", () => {
    const exercise1Link = document.querySelector(".exercise1-column a");
    const exercise2Link = document.querySelector(".exercise2-column a");
    const exercise1Div = document.getElementById("exercise1");
    const exercise2Div = document.getElementById("exercise2");

    exercise1Link.addEventListener("click", (e) => {
        e.preventDefault();
        exercise1Div.style.display = "block";
        exercise2Div.style.display = "none";
    });

    exercise2Link.addEventListener("click", (e) => {
        e.preventDefault();
        exercise1Div.style.display = "none";
        exercise2Div.style.display = "block";
    });
});
window.addEventListener("load", () => {
    const donationAmountInput = document.getElementById("donationAmount");
    const fillThermometer = document.querySelector(".fill-thermometer");
    const updateButton = document.getElementById("updateButton");
  
    updateButton.addEventListener("click", () => {
      const donatedAmount = parseFloat(donationAmountInput.value);
      const maxGoal = 10000; 
  
      if (!isNaN(donatedAmount)) {
        const fillPercentage = (donatedAmount / maxGoal) * 100;
        fillThermometer.style.height = `${fillPercentage}%`;
        document.getElementById("status").textContent = `Funds Raised: $${donatedAmount.toFixed(2)}`;
      } else {
        alert("Please enter a valid number for Funds Raised.");
      }
    });
  });


