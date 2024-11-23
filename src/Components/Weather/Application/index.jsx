import { useEffect, useState } from "react";
import Search from "../Searchweather";
import "../Weather.css"; // Import CSS

export default function Weather() {
    const [search, setsearch] = useState('');
    const [loading, setloading] = useState(false);
    const [weatherData, setweatherData] = useState(null);

    async function fetchweatherdata(param) {
        setloading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=039b048b810c84a2eb2b9bc3c0796226`
            );

            const data = await response.json();
            console.log(data, 'data');
            if (data) {
                setweatherData(data); // Correct state update
                setloading(false);
            }
        } catch (e) {
            setloading(false);
            console.log(e);
        }
    }

    function getcurrentdate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
    }

    async function handleSearch() {
        fetchweatherdata(search);
    }

    console.log(weatherData);

    useEffect(() => {
        fetchweatherdata('baku');
    }, []);

    return (
        <div className="weather-container">
            <Search
                search={search}
                setsearch={setsearch}
                handleSearch={handleSearch}
            />

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div>
                    <div className="city-name">
                        <h2>
                            {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
                        </h2>
                    </div>
                    <div className="date">
                        <span>{getcurrentdate()}</span>
                    </div>

                    <div className="temperature">
                        {weatherData?.main?.temp ? `${Math.round(weatherData.main.temp - 273.15)}°C` : ""}
                    </div>

                    <p className="description">
                        {weatherData && weatherData.weather && weatherData.weather[0]
                            ? weatherData.weather[0].description
                            : ""}
                    </p>

                    <div className="weatherinfo">
                        <div>
                            <div>
                                <p className="wind">{weatherData?.wind?.speed} m/s</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p className="humidity">{weatherData?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
