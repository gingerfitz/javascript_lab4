"use strict";
// Vending Machine
let vending = document.querySelector(".vending");

let buttons = document.querySelectorAll(".vmButton");

let totalDue = 0;

buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = Number(snack.getAttribute("date-amount"));
    totalDue += amount;
    vending.innerText = ` Total: $${totalDue}`;
  });
});

// 08/04/2020

// let currentTotal = 0;

// let total = document.querySelector(".total");

// vending.addEventListener("click", (e) => {
//   if (e.target.classList.contains("vmButton")) {
//     let snacks = parseInt(e.target.getAttribute("data-amount"));
//     currentTotal += snacks;
//     total.innerText = `Total: ${currentTotal}`;
//   }
// });

// Make Money

// let coins = document.querySelector(".coin");
// let form = document.querySelector(".make-money");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let data = new FormData(form);
//   let quantity = data.get("quantity");
//   let coin = data.get("coin");
//   for (let i = 0; i < quantity; i++) {
//     let newDiv = document.createElement("div");
//     newDiv.innerText = coin;
//     coins.append(newDiv);
//   }
//   form.reset();
// });

let display = document.querySelector(".display-coins");

let form = document.querySelector(".make-money");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let currentStateOfForm = new FormData(form);
  let number = currentStateOfForm.get("number");
  let coinType = currentStateOfForm.get("coin");
  for (let i = 0; i < number; i++) {
    let newCoin = document.createElement("div");
    newCoin.innerText = coinType;
    display.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  form.reset();
});

let bulb = document.querySelector(".bulb");

let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});
offButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});
toggleButton.addEventListener("click", () => {
  bulb.classList.toggle("light");
});
endButton.addEventListener("click", () => {
  bulb.remove();
  let button = document.querySelectorAll(".button");
  button.forEach((button) => {
    button.disabled = true;
  });
});

// onButton.addEventListener("click", () => {
// //   console.log("any");
// //   console.dir(bulb);
//   bulb.classList.add("light");
//   if (bulb.classList.contains("dark")) {
//     bulb.classList.add("bright");
//     bulb.classList.remove("dark");
//   } else {
//     bulb.classList.remove("bright");
//   }
// });
