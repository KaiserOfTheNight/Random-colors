// Generate cards dynamically
const cardContainer = document.querySelector('.cards');
for (let i = 0; i < 40; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h1></h1>`;
    cardContainer.appendChild(card);
}

// Change card colors on button click
document.getElementById('colorChanger').onclick = function() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        // Generate random RGB color
        let rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        let title = card.querySelector("h1");
        title.textContent = rgb;  // Set the RGB color text
        card.style.backgroundColor = rgb;  // Change card background color
    });
}
