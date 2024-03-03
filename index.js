// const {countCom,countW,countL, winRate} = new Statistic('logger.log')
//
const HeadsOrNails = require("./game");
const Logger = require("./logger");
const game = new HeadsOrNails();
const logger = new Logger("logger.log");

async function run() {
  await game.start();
  const { randomNumber, answer: userNumber } = game.resultRound;
  await logger.write({ randomNumber, userNumber });
  run();
}

run().catch(console.error);
