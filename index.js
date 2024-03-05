const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const HeadsOrNails = require("./game");
const Logger = require("./logger");
const game = new HeadsOrNails();
let logger;

async function run() {
  try {
    await game.start();
    const { randomNumber, answer: userNumber } = game.resultRound;
    await logger.write({ randomNumber, userNumber });
  } catch (error) {
    throw error;
  }
  run();
}

yargs(hideBin(process.argv))
  .scriptName("hot")
  .command({
    command: "$0 [file]",
    description: "Game 'Heads or Tails!(HoT)'",
    builder(yargs) {
      yargs
        .positional("file", {
          description: "файл для записи логов",
          type: "string",
        })
        .example("$0 logs.log");
    },
    handler({ file }) {
      logger = new Logger(file);
      run().catch(console.error);
    },
  })
  .demandOption("file", "Укажите файл для логов")
  .parse();
