class Toy {
    constructor(name, image, price, ageRange, rating, imageHeight, imageWidth) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.imageHeight = imageHeight; 
        this.imageWidth= imageWidth;
        
    }

    getDetails() {
        return `${this.name}<br>Price: $${this.price}<br>Age Range: ${this.ageRange}<br>Rating: ${this.rating} stars`;
    }

    getToyItem() {
        const toyItem = document.createElement('div');
        toyItem.classList.add('toy-item');

        const img = document.createElement('img');
        img.src = `images/${this.image}`;
        img.style.height = `${this.imageHeight}px`; 
        img.style.width = `${this.imageWidth}px`; 

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.innerHTML = `<p class="title">${this.name}</p><p class="label"><strong>Price:</strong> $${this.price}</p><p class="label"><strong>Age Range:</strong> ${this.ageRange}</p><p class="label"><strong>Rating:</strong> ${this.rating} stars</p>`;




        toyItem.appendChild(img);
        toyItem.appendChild(overlay);

        return toyItem;
    }
}


const toys = [
    new Toy('American Girl Doll', 'doll.jpg', 38.88, '5-7', 4, 300, 300),
    new Toy('LEGO Set', 'lego.jpg', 10.99, '6-12', 5, 300, 250),
    new Toy('Kids Bicycle', 'bike.jpg', 36.99, '3-6', 4.5, 300, 250),
    new Toy('Stuffed Animal', 'animal.jpg', 19.99, '0-7', 4, 280, 300),
    new Toy('Kids Kitchen Playset', 'kitchen.jpg', 125.99, '3-5', 4.5, 300),
    new Toy('Jigsaw Puzzle', 'puzzle.jpg', 20.99, '7-14', 5, 300, 300)
];


function addToysToDOM() {
    const container = document.querySelector('.container');
    toys.forEach(toy => {
        container.appendChild(toy.getToyItem());
    });
}


addToysToDOM();
