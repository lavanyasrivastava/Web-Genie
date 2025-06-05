let selectedSeats = [];

function toggleSeat(seatNumber) {
    const seatBtn = document.getElementById(`seat${seatNumber}`);
    if (selectedSeats.includes(seatNumber)) {
        selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
        seatBtn.classList.remove('selected');
    } else {
        selectedSeats.push(seatNumber);
        seatBtn.classList.add('selected');
    }
}

function finalizeBooking() {
    const movie = document.getElementById('movie-select').value;
    if (movie === "0") {
        alert("Please select a movie.");
        return;
    }
    if (selectedSeats.length === 0) {
        alert("Please select at least one seat.");
        return;
    }
    const confirmation = document.getElementById('confirmation');
    confirmation.innerHTML = `<p>You have booked ${selectedSeats.length} seat(s) for <strong>${movie}</strong>: ${selectedSeats.join(', ')}</p>`;
    console.log(`Movie: ${movie}, Seats: ${selectedSeats}`);
}
