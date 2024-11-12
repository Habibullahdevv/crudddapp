import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css';

export default function StarRating({ noOFstars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
    }

    function handleMouseLeave() {
        setHover(rating);
    }

    return (
        <>
        <hr />
        <br />
            <h1 className='Starheading'>Star Rating</h1>
            <div className="star-rating-container">
                {[...Array(noOFstars)].map((_, index) => {
                    index += 1;
                    return (
                        <FaStar
                            key={index}
                            className={`star-icon ${index <= (hover || rating) ? 'star-active' : 'star-inactive'}`}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            size={40}
                        />
                    );
                })}
            </div>
        </>
    );
}
