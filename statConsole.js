module.exports.statConsole = ({ lossesNumber, winNumber })=> {
    const totalAmount = winNumber + lossesNumber;
    const winRate = +((winNumber / totalAmount) * 100).toFixed();
  
    console.table(
      {
        Количество: {
          Победы: winNumber,
          Проигрышы: lossesNumber,
          '% побед': winRate,
          "Всего игр": totalAmount,
        },
      },
      ["Победы", "Проигрышы", "Всего игр",'% побед',]
    );
  }