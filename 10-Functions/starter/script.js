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

//Callback Function
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const lowerFirstword=function(str ){
  const [first, ...others]=str.split(' ');
  return [first.toLowerCase(), ...others].join( ' ');
}
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
transformer('SHUVKANT is a decent guy', lowerFirstword);
  
//JS calls the callback function all the time
const high5 = function () {
  console.log('🙏');
};

document.body.addEventListener('click', high5);
['Shuvkant', 'Hari', 'Santosh', 'Ramesh'].forEach(high5);
*/

//Greeting Functions Discussion
/*
const greet=function(greeting){
  return function(name ){
    console.log(`${greeting} ${name}`)
  }
}
const greetHey=greet('Hey');
greetHey('Shuvkant');

greet('Namaste')('Joe Biden');

//Challenge
const greetArr=greeting=>name=>console.log(`${greeting} ${name}`);
greetArr('Gor Lagaichiyau')('Mummy');
*/
//Call and APPly method implementation
/*
const nepalAirlines={
  airline:'Nepal Arilines',
  iataCode:'NA',
  bookings:[],
  book(flightNum, name){
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push(({flight:`${this.iataCode}${flightNum}`, name}));
    
  }
}
nepalAirlines.book(123, 'Shuvkant Chaudhary Phanait');
nepalAirlines.book(456, 'Emanuel Macron');


const buddhaAir={
  airline:'Buddha Air' ,
  iataCode:'BA',
  bookings:[],

}
const yetiAirlines={
  airline:'Yeti Airlines',
  iataCode:'YA',
  bookings:[],
}
//Call Method
const book=nepalAirlines.book; 
book.call(nepalAirlines, 124, 'Narendra Modi');
console.log(nepalAirlines);

book.call(buddhaAir, 254, 'Marrie Currie');
book.call(buddhaAir, 333, 'Pushpa Kamal Dahal');
console.log(buddhaAir);

book.call(yetiAirlines, 678, 'Georgia Meloni');
book.call(yetiAirlines, 687, 'Vladmir Putin');

//Apply Method
const flightData=[423, 'Haris Chandra'];
book.apply(yetiAirlines, flightData);
console.log(yetiAirlines);
book.call(yetiAirlines, ...flightData);
*/
