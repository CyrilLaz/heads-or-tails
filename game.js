// const readline = ;

module.exports = class {
  constructor() {
    const { stdin: input, stdout: output } = require("node:process");
    this.readline = require("node:readline/promises").createInterface(
      input,
      output
    );
  }
  #result;

  async tryAgainQuestion() {
    const answer = await this.readline.question("Играем дальше? (y/n) ");
    // TODO проверить ответ
    if ({ n: false, y: true }[answer]) return true;
    this.readline.close();
  }

  get resultRound() {
    return this.#result;
  }

  async start() {
    this.#result = undefined;
    const randomNumber = Math.random() > 0.5 ? 1 : 0;
    const answer = await this.readline.question(
      "Загадано случайное число (1 или 2). Отгадай!....."
    );
    //   TODO: проверить ответ
    console.log(+answer === randomNumber ? "Верно" : "Не верно");
    this.#result = { answer, randomNumber: "" + randomNumber };
  }
};
