const superAgent = require('superagent')
const cheerio = require('cheerio')
const http = require('http')
const fs = require('fs')
const request = require('request')

const reptileUrl = "http://www.tooopen.com/img/87.aspx"
// const reptileUrl = "http://jd.com/"

superAgent.get(reptileUrl).end(function(err, res){
    if(err){
        throw Error('error'+err);
    }

    let $ = cheerio.load(res.text);
    var imgs = [];
    var html = $.html();
    
    $('img').each(( index, item) => {
        imgs.push(( item.attribs['data-src'] || item.attribs['src']) )
    })

    // console.log(imgs)

    for (const url of imgs) {
        const name = url.slice(url.lastIndexOf('/') + 1)
        request(url).pipe(fs.createWriteStream('./images/' + name));
    }
    
})
