const year = new Date().getFullYear();
document.getElementById("currentyear").innerHTML =
  `© ${year} 🧑‍💻 Brandon Cazorla 🧑‍💻 Argentina`;

document.getElementById("lastmodified").textContent =
  `Last Modified: ${document.lastModified}`;


// ===== WEATHER DATA (static for now) =====
const temperature = 8; // °C
const windSpeed = 10;  // km/h


// ===== WIND CHILL FUNCTION (1 line return) =====
function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16)
       + 0.3965 * temp * Math.pow(speed, 0.16);
}


// ===== CHECK CONDITIONS =====
let windChillText = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillText = windChill.toFixed(1) + " °C";
}


// ===== WRITE TO ALL windChill SPANS =====
document.querySelectorAll(".windChill").forEach(el => {
  el.textContent = windChillText;
});


