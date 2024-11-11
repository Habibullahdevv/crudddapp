import React, { useState } from "react";

function Counter() {
    const [increments, setIncrement] = useState(0);

    return (
        <>
            <hr />
            <h1 className="counter-title">COUNTER</h1>
            
            <div className="counter-display">{increments}</div>

            <div className="counter-buttons">
                <button 
                    className="increment-button" 
                    onClick={() => {
                        setIncrement((i) => i + 1);
                        setIncrement((i) => i + 1);
                    }}
                >
                    Increment
                </button>
                <button 
                    className="decrement-button" 
                    onClick={() => setIncrement(increments - 1)}
                >
                    Decrement
                </button>
                <button 
                    className="reset-button" 
                    onClick={() => setIncrement(0)}
                >
                    Reset
                </button>
            </div>
        </>
    );
}

export default Counter;
