
function showImage() {
    document.getElementById("image").style.display = "block";
}

function hideImage() {
    document.getElementById("image").style.display = "none";
}

function startAnimation() {
    const heartAnimation = document.getElementById("heartAnimation");
    heartAnimation.style.display = "block";
    setTimeout(() => {
        heartAnimation.style.display = "none";
    }, 2000); 
}
function startAnimation() {
    const heartAnimation = document.getElementById("heartAnimation");
    heartAnimation.style.display = "block";
}


const inputData = [];

function addInput() {
   
    const productName = document.getElementById("productName").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;
    const userName = document.getElementById("userName").value;

    const inputObj = {
        productName,
        comment,
        rating,
        userName,
    };

  
    inputData.push(inputObj);

 
    displayInputData();


    clearInputFields();
}

function displayInputData() {
    const inputDisplay = document.getElementById("inputDisplay");
    inputDisplay.innerHTML = ""; 

    inputData.forEach((input, index) => {
        const inputEntry = document.createElement("div");
        inputEntry.className = "input-entry";

        const inputDisplayContainer = document.createElement("div");
        inputDisplayContainer.className = "input-display";
        inputDisplayContainer.innerHTML = `
            <h3>Input ${index + 1}</h3>
            <p><strong>Product Name:</strong> ${input.productName}</p>
            <p><strong>Comment:</strong> ${input.comment}</p>
            <p><strong>Rating:</strong> ${input.rating}</p>
            <p><strong>User Name:</strong> ${input.userName}</p>
        `;

        inputEntry.appendChild(inputDisplayContainer);
        inputDisplay.appendChild(inputEntry);
    });
}


function clearInputFields() {
   
    document.getElementById("productName").value = "";
    document.getElementById("comment").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("userName").value = "";
}


