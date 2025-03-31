const apiKey = "49d5fe3aa694fcb3380d172ecd4a4683";


async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found. Please enter a valid city.");
            return;
        }

        document.getElementById("city-name").innerText = `City: ${data.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Try again later.");
    }
}
