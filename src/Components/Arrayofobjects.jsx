import { useState } from "react";

function Arrayofobjects() {
    const [cars, setCars] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCars((prevCars) => [...prevCars, newCar]);
        setYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleCarYear(event) {
        setYear(event.target.value);
    }

    function handleCarMake(event) {
        setCarMake(event.target.value);
    }

    function handleCarModel(event) {
        setCarModel(event.target.value);
    }

    function handleRemove(index) {
        setCars((prevCars) => prevCars.filter((_, i) => i !== index));
    }

    return (<> <hr />
        <div className="car-container">
            <hr />
            <h1 className="car-title">Array of Car Objects</h1>
            <h2 className="car-subtitle">List of Car Objects</h2>

            <ul className="car-list">
                {cars.map((car, index) => (
                    <li
                        key={index}
                        className="car-item"
                        onClick={() => handleRemove(index)}
                    >
                        {car.year}, {car.make}, {car.model}
                    </li>
                ))}
            </ul>

            <div className="input-group">
                <input
                    className="input-year"
                    type="number"
                    value={carYear}
                    onChange={handleCarYear}
                    placeholder="Enter car year"
                />
                <input
                    className="input-make"
                    type="text"
                    value={carMake}
                    onChange={handleCarMake}
                    placeholder="Enter car make"
                />
                <input
                    className="input-model"
                    type="text"
                    value={carModel}
                    onChange={handleCarModel}
                    placeholder="Enter car model"
                />
                <button className="add-car-button" onClick={handleAddCar}>
                    Add Car
                </button>
            </div>
        </div></> 
    );
}

export default Arrayofobjects;
