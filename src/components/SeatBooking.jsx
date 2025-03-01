import React, { useState } from 'react';
import './SeatBooking.css';

function SeatBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmedSeats, setConfirmedSeats] = useState([]);
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }

  const handleSeatClick = (number) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(number)
        ? prevSelectedSeats.filter((seat) => seat !== number)
        : [...prevSelectedSeats, number]
    );
  };

  const handleConfirm = () => {
    setConfirmedSeats([...confirmedSeats, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div>
      <div className="seats-container">
        {numbers.map((number) => (
          <div
            key={number}
            className={`seat ${selectedSeats.includes(number) ? 'selected' : ''} ${confirmedSeats.includes(number) ? 'confirmed' : ''}`}
            onClick={() => handleSeatClick(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <button className='btn-confirm' onClick={handleConfirm} disabled={selectedSeats.length < 1}>Confirm</button>
    </div>
  );
}

export default SeatBooking;