module.exports = class {
  constructor(path = "") {
    this.file = path;
  }

  fs = require("fs");
  /**
   * string
   */
  file;
  /**
   * @param {string} f
   */
  set file(f) {
    this.file = f;
  }

  async write(content) {
    const timeStamp = (Date.now() / 1000).toFixed();
    await new Promise((res, rej) =>
      this.fs.appendFile(
        this.file,
        JSON.stringify({ ...content, timeStamp }) + "\n",
        (err) => {
          if (err) rej(err);
          res();
        }
      )
    );
  }
};
