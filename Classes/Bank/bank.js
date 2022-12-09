// DOM
const createNewAccount = document.querySelector(".create-new-account");
const accountID = document.querySelector("#account-id");
const accountIDButton = document.querySelector(".account button");
const deposit = document.querySelector("#deposit-valor");
const depositButton = document.querySelector(".deposit button");
const withdraw = document.querySelector("#withdraw-valor");
const withdrawButton = document.querySelector(".withdraw button");
const displayBalance = document.querySelector(".display-balance");
const displayID = document.querySelector(".display-account-id");

// Array of Accounts
let accountsList = [];

//Class
class Bank {
    // Constructor
    constructor(balance = 0) {
        this.bankID = Bank.incrementalID();
        this.balance = balance;
    }

    //Static
    static incrementalID() {
        !this.latestID ? (this.latestID = 1) : this.latestID++;
        return this.latestID;
    }

    // Methods
    deposit(valor) {
        this.balance += valor;
        showAccountDetails();
    }

    withdraw(valor) {
        this.balance < valor
            ? console.log(`Can't withdraw more than you have.`)
            : (this.balance -= valor);

        showAccountDetails();
    }
}

// Functions
function createAccount() {
    const account = new Bank();
    accountsList.push(account);
}

function validateAccount() {
    const value = Number(accountID.value);
    !accountsList.some((x) => x.bankID === value) &&
        alert("Enter a valid bank ID");

    return value;
}

function showAccountDetails() {
    const value = validateAccount();

    console.log(value);

    if (accountsList.some((x) => x.bankID === value)) {
        displayID.innerText = value;
        displayBalance.innerText = accountsList[value - 1].balance;
    }
}

// Event Listeners
createNewAccount.addEventListener("click", createAccount);
createNewAccount.addEventListener("click", () => console.log(accountsList));
accountIDButton.addEventListener("click", showAccountDetails);
depositButton.addEventListener("click", () => {
    const value = validateAccount();

    console.log(value);
    accountsList[value - 1].deposit(Number(deposit.value));
});
withdrawButton.addEventListener("click", () => {
    const value = validateAccount();

    console.log(value);
    accountsList[value - 1].withdraw(Number(withdraw.value));
});
