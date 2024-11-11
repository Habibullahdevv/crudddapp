import { useState } from "react";

function UpdaterObject() {
    const [car, setCar] = useState({ year: 2024, name: "CD70", from: "China" });

    function handleYear(event) {
        setCar((prevCar) => ({ ...prevCar, year: event.target.value }));
    }

    function handleName(event) {
        setCar((prevCar) => ({ ...prevCar, name: event.target.value }));
    }

    function handleFrom(event) {
        setCar((prevCar) => ({ ...prevCar, from: event.target.value }));
    }

    return (
        <>
            <hr />
            <h1 className="object-update-title">UPDATE OBJECTS</h1>

            <div className="object-info">
                <h2 className="car-details">
                    Your car is: <br />
                    <br />
                    {car.year}, <br /> Name: {car.name}, <br /> From: {car.from}.
                </h2>

                <input
                    className="input-year"
                    type="number"
                    value={car.year}
                    onChange={handleYear}
                    placeholder="Enter car year"
                />
                <input
                    className="input-name"
                    type="text"
                    value={car.name}
                    onChange={handleName}
                    placeholder="Enter car name"
                />
                <input
                    className="input-from"
                    type="text"
                    value={car.from}
                    onChange={handleFrom}
                    placeholder="Enter origin"
                />
            </div>
        </>
    );
}

export default UpdaterObject;
