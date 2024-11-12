import { useState } from "react";
import QRCode from "react-qr-code";

export default function Qrcodegenerator() {
    const [inputValue, setInputValue] = useState("");
    const [qrValue, setQrValue] = useState("https://alivegore.com/shocking/underground/13392-video-todays-menu.html");

    function handleGenerate() {
        setQrValue(inputValue); // Set the QR code value to the current input
        setInputValue("");
    }

    return (
        <>
        <hr />
            <div className="qr-generator-container" id="qr-generator-main">
                <h1 className="qr-title">QR-Code Generator</h1>
                <div className="qr-input-container">
                    <input 
                        type="text" 
                        placeholder="Enter Your Value" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="qr-input"
                    />
                    <button onClick={handleGenerate} className="qr-button">Generate QR Code</button>
                </div>
                {/* Conditionally render the QR code when there’s a value */}
                {qrValue && (
                    <div className="qr-code-display" id="qr-code-box">
                        <QRCode value={qrValue} />
                    </div>
                )}
            </div>
        </>
    );
}
