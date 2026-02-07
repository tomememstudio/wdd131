const yearSpan = document.getElementById("currentyear");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const lastMod = document.getElementById("lastModified");
if (lastMod) {
    lastMod.textContent = document.lastModified;
}

const products = [
    { id: "p1", name: "Smart Speaker" },
    { id: "p2", name: "Wireless Headphones" },
    { id: "p3", name: "Fitness Tracker" },
    { id: "p4", name: "4K Monitor" }
];

const select = document.getElementById("product");
if (select) {
    products.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = p.name;
        select.appendChild(option);
    });
}

const message = document.getElementById("message");
if (message) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    message.innerHTML = `
        <h2>Thank you for your review!</h2>
        <p>Total reviews submitted: <strong>${count}</strong></p>
    `;
}
