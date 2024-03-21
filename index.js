#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        message: "Enter first number:",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second number:",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select Operator to perfom opertaion:",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
    console.log("Author: Engineer Abdul Nabi Laghari");
}
else if (answer.Operator === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
    console.log("Author: Engineer Abdul Nabi Laghari");
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
    console.log("Author: Engineer Abdul Nabi Laghari");
}
else if (answer.Operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
    console.log("Author: Engineer Abdul Nabi Laghari");
}
else {
    console.log("Please Enter valid number...!");
}
