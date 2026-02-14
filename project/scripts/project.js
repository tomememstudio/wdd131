
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;

const jewelryItems = [
    { id: 1, name: "Gold Necklace", price: 25 },
    { id: 2, name: "Pearl Earrings", price: 18 },
    { id: 3, name: "Crystal Bracelet", price: 20 }
];

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function displayJewelry() {
    const container = document.querySelector("#jewelry-container");
    if (!container) return;

    container.innerHTML = jewelryItems.map(item => `
    <div class="card">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <button data-id="${item.id}">Add to Favorites</button>
    </div>
  `).join("");
}

function updateCounter() {
    const counter = document.querySelector("#fav-count");
    if (counter) counter.textContent = favorites.length;
}

document.addEventListener("click", e => {
    if (e.target.matches("button[data-id]")) {
        const id = Number(e.target.dataset.id);

        if (!favorites.includes(id)) {
            favorites.push(id);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            updateCounter();
        }
    }
});

displayJewelry();
updateCounter();
