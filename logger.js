const fs = require("fs");
module.exports = class {
  constructor(path) {
    this.file = path;
  }

  async write(content) {
    const timeStamp = (Date.now() / 1000).toFixed();

    await new Promise((res, rej) =>
      fs.appendFile(
        this.file,
        JSON.stringify({ ...content, timeStamp }) + ",\n",
        (err) => {
          if (err) rej(err);
          res();
        }
      )
    );
  }
};
