const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { statConsole } = require("./statConsole");


yargs(hideBin(process.argv))
  .scriptName("hot-stat")
  .command({
    command: "$0 [path]",
    description: "Game 'Heads or Tails!(HoT)'",
    builder(yargs) {
      yargs
        .positional("path", {
          description: "путь до файла логов",
          type: "string",
        })
        .example("$0 ./logs.log");
    },
    async handler({ path }) {
      const Statistic = require("./statistic");
      const statistic = new Statistic(path);
      try {
        const stat = await statistic.getStat();
        statConsole(stat);
      } catch (e) {
        throw e.message;
      }
    },
  })
  .demandOption("path", "Укажите путь для файла логов")
  .parse();
