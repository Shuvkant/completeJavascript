"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const account5 = {
  owner: "Sarah Smith",
  movements: [320, 1200, 100, 450, 300],
  interestRate: 1,
  pin: 2223,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = " ";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
     <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);
//console.log(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

//Event handlers
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  //preventing form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

//Transfer money
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

//Loan Amount
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 && currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    //Add movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

//closing account

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("Delete");
  if (
    inputCloseUsername.value = currentAccount.username &&
      Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex((acc) =>
      acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);
// console.log(...currencies);

/////////////////////////////////////////////////
/*
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(''));
*/
///////////////////////////////////////
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} Your have deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You have withdrawl ${Math.abs(movement)}`);
  }
}
console.log("---------For each");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} Your have deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You have withdrawl ${Math.abs(mov)}`);
  }
});
*/
/*
const euroToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawls);
*/
//console.log(movements);
//accumulator ->SNOWBALL
//const balance = movements.reduce(function (acc, cur, i, arr) {
// console.log(`Iteration ${i} : ${acc}`);
//return acc + cur;
//}, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
//console.log(balance);
/*
//maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max);
*/
/*
//Challenge about the ages of dogs
//
const calculateHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + 4 * age));
  const adults = humanAges.filter((age) => age >= 18);
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(humanAges);
  console.log(adults);
  console.log(average);
};
calculateHumanAge([5, 2, 4, 1, 15, 8, 3]);
calculateHumanAge([16, 6, 10, 5, 6, 1, 4]);
*/

/*
//The Magic of Chaining
const euroToUsd = 1.1;
const totalDepositsUSD = movements.filter((mov) => mov > 0).map((mov) =>
  mov * euroToUsd
).reduce(
  (acc, mov) => acc + mov,
  0,
);
console.log(totalDepositsUSD);
*/
/*
// The find methods
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
*/

//Some and Every
/*
console.log(movements);
// EQUALITY
console.log(movements.includes(-130));

// SOME: CONDITION
const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);

//EVERY: CONDITION
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

// Separate Callback
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

//Flat and flatmap
/*
const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(arr.flat());

//flat
const overalBalance = accounts.map((acc) => acc.movements).flat().reduce(
  (acc, mov) => acc + mov,
  0,
);
console.log(overalBalance);

const overalBalance2 = accounts.flatMap((acc) => acc.movements).reduce(
  (acc, mov) => acc + mov,
  0,
);
console.log(overalBalance2);
*/

//Sorring methods
/*
//Strings
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

// return < 0 A, B(keep order)
// return >0 B, A(switch order)

//Ascending order
//movements.sort((a, b) => {
//if (a > b) return 1;
// if (a < b) return -1;
//});
movements.sort((a, b) => a - b);
console.log(movements);

//Descending order
//movements.sort((a, b) => {
// if (a > b) return -1;
//if (a < b) return 1;
//});
movements.sort((a, b) => b - a);
console.log(movements);
*/

//Array Methods Practice

//1.
const bankDepositSum = accounts.flatMap((acc) => acc.movements).filter((mov) =>
  mov > 0
).reduce((sums, mov) => sums + mov, 0);
console.log(bankDepositSum);

//2.
const { deposits, withdrawls } = accounts.flatMap((acc) => acc.movements)
  .reduce((sums, cur) => {
    sums[cur > 0 ? "deposits" : "withdrawls"] += cur;
    return sums;
  }, { withdrawls: 0, deposits: 0 });

console.log(deposits, withdrawls);

// This is a nice title
//
const convertTitleCase = function (title) {
  const exceptions = ["and", "a", "an", "the", "but", "or", "on", "in", "with"];
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const titleCase = title.toLowerCase().split(" ").map((word) =>
    exceptions.includes(word) ? word : capitalize(word)
  ).join(" ");
  return capitalize(titleCase);
};
console.log(
  convertTitleCase("this is one of the beautiful flower that i have seen."),
);

console.log(
  convertTitleCase("and is one of the beautiful flower that i have seen."),
);
