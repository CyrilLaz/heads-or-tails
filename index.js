const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const HeadsOrNails = require("./game");
const Logger = require("./logger");
const game = new HeadsOrNails();
let logger = new Logger();

async function run() {
  await game.start();
  const { randomNumber, answer: userNumber } = game.resultRound;
  await logger.write({ randomNumber, userNumber });
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
    handler({file}) {
      logger.file = file;
      run().catch(console.error);
    },
  })
  .demandOption("file", "Укажите файл для логов")
  .parse();
