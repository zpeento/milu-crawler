const superagent = require('superagent');
const cheerio = require('cheerio');


const baseUrl = 'http://jandan.net/duan';

const connect = require('./connect.js');

connect("mongodb://localhost:27017/test")
    .then(
        async (db)=>{
            const collection = db.collection('milu_crawler');
            const res = await collection.insertOne({name: "test", age: 19});
            const result = await collection.find({}).toArray();
            console.log(result);        
            db.close();
        },
        (err)=>{
            console.log("db connection error")
            throw err;
        }
    )
// superagent.get(baseUrl)
//     .end((err,res) => {
//         if(err) {
//             return console.log(err);
//         }
//         let $ = cheerio.load(res.text);
//         let content = $('html').html();

//         console.log(content);
//     })
