#!/usr/bin/env node

import inquirer from "inquirer";

interface ansType {
    userId: string,
    userPin: number,
    accountType: string,
    amount: number,
}

const answers: ansType = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly enter your ID:"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly enter your PIN:"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current","saving"],
        message: "Please Salect Your Account Type:"
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash","Withdrwal"],
        message: "Salect Your transaction",
        when(answers) {
            return answers.accountType == "current";
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 3000, 5000, 10000, 20000],
        message: "Salecet Your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the Withdrwal Amount:",
        when(answers) {
            return answers.transactionType == "Withdrwal"
        }
    },
]);

if(answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() ^ 500000);
    console.log("Current Balance");

 const enteredAmount = answers.amount;
 if (balance <= enteredAmount) {
    console.log("Insuficiant Balance");
 } else {
    const remaining = balance - enteredAmount;
    console.log("Your remaining balace is", remaining);
 }
}