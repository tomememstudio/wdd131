const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;


const temperature = 28; 
const windSpeed = 10; 

const windChillSpan = document.querySelector("#windchill");

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChillSpan.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillSpan.textContent = "N/A";
}
