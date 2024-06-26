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
/*
const flight = 'LH24';
const shuv = {
  name: 'Shuvkant',
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
// checkIn(flight, shuv);
// console.log(flight);
// console.log(shuv);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(shuv);
checkIn(flight, shuv);*/

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher Order function
const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by : ${fn.name}`);
};
transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  console.log('🙏');
};

document.body.addEventListener('click', high5);
