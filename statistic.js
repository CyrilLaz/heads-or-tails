module.exports = class {
  constructor(path) {
    this.path = require("path").resolve(path);
  }
  #winNumber = 0;
  #lossesNumber = 0;

  async #readingFile() {
    const logReading = require("fs").createReadStream(this.path);
    const file = require("readline").createInterface(logReading);
    await new Promise((resolve, reject) => {
      file.on("line", (line) => {
        const { randomNumber, userNumber } = JSON.parse(line);
        switch (randomNumber === userNumber) {
          case true:
            this.#winNumber += 1;
            break;
          case false:
            this.#lossesNumber += 1;
            break;
        }
      });
      file.on("close", () => {
        resolve();
      });
      file.on("error", (error) => {
        reject(error);
      });
    });
  }

  async getStat() {
    try {
      await this.#readingFile();
    } catch (e) {
      throw e;
    }

    return {
      winNumber: this.#winNumber,
      lossesNumber: this.#lossesNumber,
    };
  }
};
