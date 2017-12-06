const superagent = require('superagent');
const cheerio = require('cheerio');

const baseUrl = 'http://jandan.net/duan';

superagent.get(baseUrl)
    .end((err,res) => {
        if(err) {
            return console.log(err);
        }
        let $ = cheerio.load(res.text);
        let content = $('html').html();

        console.log(content);
    })
