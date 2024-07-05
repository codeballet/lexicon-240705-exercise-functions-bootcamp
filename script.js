////////////////
// Exercise 1 //
////////////////
// let userInput = prompt("Write something:");

// function getLength(input) {
//     console.log(`Length of string: ${input.length}`);
// }

// getLength(userInput);

////////////////
// Exercise 2 //
////////////////
// let userInput = prompt("Write a date in the format YYYY-MM-DD");

// function getYear(input) {
//     console.log(input.substring(0, 4));
// }

// getYear(userInput);

////////////////////////////
// Exercise 3: Calculator //
////////////////////////////
// let digit1 = undefined;
// let digit2 = undefined;
// let operator;

// while (isNaN(digit1)) {
//     digit1 = parseInt(prompt("Write the first number"));
// }
// console.log(digit1);

// while (isNaN(digit2)) {
//     digit2 = parseInt(prompt("Write the second number"));
// }
// console.log(digit2);

// operator = prompt("Enter mathematical operator: +, -, *, or /");
// console.log(operator);

// function calculate(digit1, digit2, operator) {
//     switch (operator) {
//         case "+":
//             let sum = digit1 + digit2;
//             console.log(`${digit1} + ${digit2} = ${sum}`);
//             break;
//         case "-":
//             let diff = digit1 - digit2;
//             console.log(`${digit1} - ${digit2} = ${diff}`);
//             break;
//         case "*":
//             let prod = digit1 * digit2;
//             console.log(`${digit1} * ${digit2} = ${prod}`);
//             break;
//         case "/":
//             let quot = digit1 / digit2;
//             console.log(`${digit1} / ${digit2} = ${quot}`);
//             break;
//         default:
//             console.log(
//                 `Cannot calculate. Is "${operator}" one of the mathematical operators: +, -, *, or /?`
//             );
//             break;
//     }
// }

// calculate(digit1, digit2, operator);

////////////////////////////////////////
// Exercise 4: Stone, Paper, Scissors //
////////////////////////////////////////
// let options = ["stone", "paper", "scissors"];
// let userScore = 0;
// let computerScore = 0;
// let user;
// let computer;

// function checkInput(input) {
//     return options.includes(input);
// }

// function computerOption() {
//     return options[Math.floor(Math.random() * 3)];
// }

// function userOption() {
//     let option;
//     cleared = false;
//     while (!cleared) {
//         option = prompt("Choose stone, paper, or scissors");
//         option = option.toLowerCase();
//         cleared = checkInput(option);
//     }
//     return option;
// }

// function compare(computer, user) {
//     switch (computer) {
//         case "stone":
//             if (user === options[0]) {
//                 console.log("It's a draw");
//             } else if (user === options[1]) {
//                 userScore++;
//                 console.log("You win this round");
//             } else if (user === options[2]) {
//                 computerScore++;
//                 console.log("Computer wins this round");
//             }
//             break;
//         case "paper":
//             if (user === options[0]) {
//                 computerScore++;
//                 console.log("Computer wins this round");
//             } else if (user === options[1]) {
//                 console.log("It's a draw");
//             } else if (user === options[2]) {
//                 userScore++;
//                 console.log("You win this round");
//             }
//             break;
//         case "scissors":
//             if (user === options[0]) {
//                 userScore++;
//                 console.log("You win this round");
//             } else if (user === options[1]) {
//                 computerScore++;
//                 console.log("Computer wins this round");
//             } else if (user === options[2]) {
//                 console.log("It's a draw");
//             }
//             break;
//         default:
//             console.log("I don't know what happened here!");
//             break;
//     }
// }

// function round(counter) {
//     console.log(`\nRound ${counter}:`);
//     computer = computerOption();
//     user = userOption();
//     console.log(`Computer chose: ${computer}`);
//     console.log(`You chose: ${user}`);
//     compare(computer, user);
//     console.log(`Computer's present score: ${computerScore}`);
//     console.log(`Your present score: ${userScore}`);
// }

// function play() {
//     let noWinner = true;
//     let counter = 1;
//     while (noWinner) {
//         if (computerScore < 3 && userScore < 3) {
//             round(counter);
//         } else if (computerScore === 3) {
//             console.log("\nThe computer won this time.");
//             noWinner = false;
//         } else if (userScore === 3) {
//             console.log("\nCongratulations, you won!");
//             noWinner = false;
//         } else {
//             console.log("\nI'm confused... I don't know who won!");
//             noWinner = false;
//         }
//         counter++;
//     }
// }

// play();

/////////////////////////////////
// Exercise 5: Split the Nota! //
/////////////////////////////////
