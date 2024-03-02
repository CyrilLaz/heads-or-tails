// const logger = new Logger('logger.log')
// const {countCom,countW,countL, winRate} = new Statistic('logger.log')
//
// logger.write({randomNumber,userNumber})
const HeadsOrNails = require("./game");
const game = new HeadsOrNails();

async function run() {
  await game.start();
  console.log(game.resultRound)
  if (await game.tryAgainQuestion()) run();
}

run();
