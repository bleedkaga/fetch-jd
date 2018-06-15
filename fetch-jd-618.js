var request = require('request');
const $ = require('cheerio');
const fs = require('fs');
// request('http://www.baidu.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

request('https://sale.jd.com/act/XAhdysDo4P.html', (error, response, body) => {
//   console.log('error', error)
//   console.log('response', response)
//   console.log('body', body)
  fs.writeFile('jd.html', body)
})