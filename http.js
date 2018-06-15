const http = require('http')
const fs = require('fs')
const url = require('url');
const util = require('util')
const cheerio = require('cheerio')

http.createServer((req, res) => {
    res.writeHeader(200, {'Content-type': 'text/javascript; charset=UTF-8'})
    var params = url.parse(req.url, true).query;
    res.write(`网站名：${params.name}`)
    res.write(`\n`)
    res.write(`url: ${params.url}`)
    res.write(`\n`)
    
    let $ = cheerio.load(params.data);
    res.write()
    res.end();
}).listen(3000)