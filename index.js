const log = console.log;

var chalk = require("chalk");
var message = "Hello " + chalk.yellow("World");

// Basic example
log(message);

// Combine styled and normal strings
log(chalk.blue('Hello') + 'World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));