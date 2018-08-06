var fs = require('fs');

var obj = [
    {
        'title': 'My first title',
        'url': 'www.google.com',
        'date': '2018-05-01',
        'source': 'Time of India'
    },
    {
        'title': 'My second title',
        'url': 'www.yahoo.com',
        'date': '2018-04-01',
        'source': 'News api'
    }
];

var jsonData = JSON.stringify(obj);

//Writing to a JSON file. 
var basePath = "/Users/amaykataria/Documents/openFrameworks/0.96/apps/Block-Inscribe/Transactions/JSON/"
fs.writeFile(basePath + "January2015.json", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

// // Reading a JSON synchronously. 
// var rawData = fs.readFileSync('test.json'); 
// var obj = JSON.parse(rawData);
// console.log(obj.length);