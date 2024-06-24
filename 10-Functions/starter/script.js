'use strict';
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

//Second segment
const flight = 'LH24';
const shuv = {
  name: 'Shuvkant Chaudhry Phanait',
  passport: 123456789,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 123456789) {
    alert('Check In');
    console.log(passenger.name);
    console.log(passenger.passport);
  } else {
    alert('Wrong passport');
  }
};
checkIn(flight, shuv);
console.log(flight);
console.log(shuv);
