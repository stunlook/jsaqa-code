const { TestWatcher } = require("jest");

module.exports = {
    verbose: true, //указывает на то, что каждый тест будет показан в отчете о процессе запуска 
     preset: "jest-puppeteer", //указываем, что будем использовать эту библиотеку
 };