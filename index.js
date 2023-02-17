import { accounts } from "/data.js";

const menuBtn = document.getElementById("menu-btn");
const navList = document.getElementById("nav-list");
const accountList = document.getElementById("accounts");
const spentList = document.getElementById("spent-list");
const spendingsTitle = document.getElementById('spending-title')

function showMenu() {
  if (navList.style.display === "none") {
    navList.style.display = "block";
  } else {
    navList.style.display = "none";
  }
}

menuBtn.addEventListener("click", showMenu);

function renderAccounts() {
  let string = "";
  for (let account of accounts) {
    string += `
        <div class="account" id="account">
            <p class="account-title">${account.title}</p>
            <div class="amount" id="amount">$${account.balance}</div>
        </div>
        `;
  }
  accountList.innerHTML = string;
}

document.addEventListener("click", function (e) {
  let string = "";
  let data = "";
  if (e.target.textContent === "Savings") {
    spendingsTitle.textContent = "Savings";
    for (let i = 0; i < accounts.length; i++) {
      if (e.target.textContent == accounts[i].title) {
        data = accounts[i].spendings;
        for (let j = 0; j < data.length; j++) {
          string += `
                    <div class="spending" id="spending">
                        <p class="spending-title">${data[j].category}</p>
                        <div class="spending-amount" id="spending-amount">$${data[j].spent}</div>
                    </div>
                    `;
          console.log(data[j].category);
        }
        spentList.innerHTML = string;
        console.log(data);
      }
    }
  } else {
    for (let i = 0; i < accounts.length; i++) {
        spendingsTitle.textContent = "Spendings";
      if (e.target.textContent == accounts[i].title) {
        data = accounts[i].spendings;
        for (let j = 0; j < data.length; j++) {
          string += `
                    <div class="spending" id="spending">
                        <p class="spending-title">${data[j].category}</p>
                        <div class="spending-amount" id="spending-amount">$${data[j].spent}</div>
                    </div>
                    `;
          console.log(data[j].category);
        }
        spentList.innerHTML = string;
        console.log(data);
      }
    }
  }
});

renderAccounts();
