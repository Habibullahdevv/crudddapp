import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcodegenerator() {
    const [inputValue, setInputValue] = useState("");
    const [qrValue, setQrValue] = useState("https://alivegore.com/shocking/underground/13392-video-todays-menu.html");

    function handleGenerate() {
        setQrValue(inputValue); // Set the QR code value to the current input
        setInputValue("")
    }

    return (
        <>
            <div>
                <h1>--QR-Code Generator--</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter Your Value" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleGenerate}>Click to Generate</button>
                </div>
                {/* Conditionally render the QR code when there’s a value */}
                {qrValue && (
                    <div style={{ marginTop: "20px" }}>
                        <QRCode value={qrValue} />
                    </div>
                )}
            </div>
        </>
    );
}
