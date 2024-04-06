#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your Pin",
    type: "number"
});
if (pinAnswer.pin === myPin) {
    console.log("Your Pin is Correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Select an Options",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        }
    ]);
    // if user select withdraw
    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter an Amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`the remaining balance is : ${balance}`);
        }
        else {
            console.log(`You have insufficient balance`);
        }
        // if user select fast cash
    }
    else if (operationAns.operations === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select an amount",
                type: "list",
                choices: ["1000", "5000", "10000", "100000"]
            }
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`The Remaining Balance is: ${balance2}`);
        }
        else {
            console.log(`you have insufficient balance`);
        }
        // for check balance
    }
    else if (operationAns.operations === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your Pin is Wrong");
}
