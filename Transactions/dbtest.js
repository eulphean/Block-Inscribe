var Datastore = require('nedb');
var fs = require('fs');
var dbPath = '/Users/amaykataria/Documents/openFrameworks/0.96/apps/Block-Inscribe/Transactions/db/'
var db = new Datastore({ filename: dbPath + 'test.db', autoload: true });

// var doc = { hello: 'world'
//                , n: 5
//                , today: new Date()
//                , nedbIsAwesome: true
//                , notthere: null
//                , notToBeSaved: undefined  // Will not be saved
//                , fruits: [ 'apple', 'orange', 'pear' ]
//                , infos: { name: 'nedb' }
//                };

//var rawData = fs.readFileSync('date.json'); 
//var obj = JSON.parse(rawData);
// db.insert(doc, (err, newDocs) => {
//     console.log("Success");
// });

db.find({ date: { $gte: 6 } }, function (err, docs) {
    // docs is an array containing documents Mars, Earth, Jupiter
    // If no document is found, docs is equal to []
    console.log(docs);
  });