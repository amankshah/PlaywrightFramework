const ExcelJs = require("exceljs");

const workbook = new ExcelJs.Workbook();
workbook.xlsx.readFile("download.xlsx").then(() => {
  const worksheet = workbook.getWorksheet("Sheet1");

  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, cellNumber) => {
      console.log(rowNumber, cellNumber, cell.value);
    });
  });
});
