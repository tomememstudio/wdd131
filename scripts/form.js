const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

document.getElementById("lastModified").textContent = document.lastModified;
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

if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);

    document.getElementById("message").innerHTML =
        `<h2>Thank you for your review!</h2>
     <p>Total reviews submitted: <strong>${count}</strong></p>`;
}
