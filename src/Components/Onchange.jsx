import { useState } from "react";

function OnChange() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");
    const [delivery, setDelivery] = useState("Delivery");

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleQuantity(event) {
        setQuantity(event.target.value);
    }

    function handleComment(event) {
        setComment(event.target.value);
    }

    function handleDelivery(event) {
        setDelivery(event.target.value);
    }

    return (
        <div className="onchange-container">
            <hr />
            <h1 className="live-update-title">Live Update</h1>

            <div className="input-section">
                <h2 className="input-title">Name</h2>
                <input
                    className="input-name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                />
                <h3 className="output-display">{name}</h3>

                <h2 className="input-title">Quantity</h2>
                <input
                    className="input-quantity"
                    value={quantity}
                    type="number"
                    onChange={handleQuantity}
                    placeholder="Enter quantity"
                />
                <h3 className="output-display">{quantity}</h3>

                <h2 className="input-title">Comment</h2>
                <textarea
                    className="input-comment"
                    value={comment}
                    onChange={handleComment}
                    placeholder="Leave a comment"
                />
                <h3 className="output-display">{comment}</h3>

                <div className="delivery-options">
                    <label className="delivery-option">
                        <input
                            type="radio"
                            value="Pick up"
                            checked={delivery === "Pick up"}
                            onChange={handleDelivery}
                        />
                        Pick up
                    </label>
                    <br />
                    <label className="delivery-option">
                        <input
                            type="radio"
                            value="Delivery"
                            checked={delivery === "Delivery"}
                            onChange={handleDelivery}
                        />
                        Delivery
                    </label>
                    <h3 className="output-display">Shipping: {delivery}</h3>
                </div>
            </div>
        </div>
    );
}

export default OnChange;
