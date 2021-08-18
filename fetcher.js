const readline = require('readline');
const request = require('request');
const fs = require('fs');

const urlFilePathArr = process.argv.slice(2);
const url = urlFilePathArr[0];
const filePath = urlFilePathArr[1];

const pageDownloader = (url) => {
  //console.log(urlFilePathArr)
  request(`${url}`, (error, response, body) => {
    fs.writeFile(`${filePath}`, body, err => {

      if (err) {
        throw err;
      }
      const stats = fs.statSync(filePath);
      const fileSizeInBytes = stats.size;//gets the size of the file
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${filePath}`);

    });

  });
};
pageDownloader(url);