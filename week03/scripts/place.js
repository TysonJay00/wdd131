
const temperature = 32;
const windSpeed = 11;   


function calculateWindChill(temp, speed) {
    return Math.round(
        13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)
    );
}


let windChill;
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + "°C";
} else {
    windChill = "N/A";
}


document.addEventListener("DOMContentLoaded", () => {
    const weatherItems = document.querySelectorAll(".weather-box ul li");
    weatherItems.forEach(li => {
        if (li.textContent.toLowerCase().includes("windchill")) {
            li.textContent = `Windchill: ${windChill}`;
        }
    });
});
