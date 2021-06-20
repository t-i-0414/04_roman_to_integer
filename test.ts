import romanToInt from ".";
const chalk = require("chalk");

if (romanToInt("III") === 3) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (romanToInt("IV") === 4) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (romanToInt("IX") === 9) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (romanToInt("LVIII") === 58) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (romanToInt("MCMXCIV") === 1994) {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}
