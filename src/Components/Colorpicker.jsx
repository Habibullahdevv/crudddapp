import { useState } from "react";

function Colorpicker() {
    const [color, setColor] = useState("#FFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <>
            <div className="color-picker-container">
                <hr />
                <h1>Color Picker</h1>
                <div className="color-display" style={{ backgroundColor: color }}>
                    <p>Select a color: {color}</p>
                </div>

                <label>Select a color</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>
        </>
    );
}

export default Colorpicker;
