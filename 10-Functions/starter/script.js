"use strict";

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
/*
//Call and APPly method implementation
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

//Bind Method
const bookBA=book.bind(buddhaAir);
const bookYA=book.bind(yetiAirlines);
const bookNA=book.bind(nepalAirlines);
bookBA(343, 'Ramesh Pandit');
console.log(buddhaAir);

const bookBA235=bookBA.bind(buddhaAir, 234);
bookBA235('Jayanti Chaudhary');
console.log(buddhaAir);
*/
/*

//With event listeners
nepalAirlines.planes=300;
nepalAirlines.buyplane=function(){
  console.log(this);

  this.planes++;
  console.log(this.planes);
}
document.querySelector('.buy').addEventListener('click', nepalAirlines.buyplane.bind(nepalAirlines));
*/
/*
//Partial application

const addTax=(rate, value)=>value+value*rate;

console.log(addTax(0.10,100));
const addVAT=addTax.bind(null, 0.1);
console.log(addVAT(200));

const addTaxRate=function(rate){
  return function(value){
    return value+ value*rate;
  }
}

const addVAT2=addTaxRate(0.5);
console.log(addVAT2(100));
console.log(addVAT2(500));
*/
/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(write option number)`,
      ),
    );
    console.log(answer);
    //Register answer
    typeof answer === "number" && answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

//poll.registerNewAnswer();
document.querySelector(".poll").addEventListener(
  "click",
  poll.registerNewAnswer.bind(poll),
);

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
poll.displayResults.call({ answers: [5, 2, 3, 7, 12, 14] }, "string");
poll.displayResults.call({ answers: [5, 2, 3, 4, 5, 6, 7] });
*/

//New section
/*
const runfunction = function () {
  console.log("This function will never run again");
};
runfunction();
//Immdiately invoked functional expression
(function () {
  console.log("This is shuvkant Chaudhary Phanait");
})();
(() => {
  console.log("This will also never run again");
})();

{
  const isPrivate = 23;
  var notPrivate = 34;
}

//console.log(isPrivate);
console.log(notPrivate);
*/

//Understanding Closures
/*
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);
*/

let f;
const g = function () {
  const a = 24;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
const h = function () {
  const b = 224;
  return function () {
    console.log(b * 2);
  };
};
h();
f();
