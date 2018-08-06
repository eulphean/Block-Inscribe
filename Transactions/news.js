var erBase = require("eventregistry");
var fs = require('fs');
var er = new erBase.EventRegistry({apiKey: "81a27b16-a3a7-4405-94e3-d2240fe698a4"});
var newsData = [];
var month = "07-2018";

function queryNews() {
    // Create the lookup query.
    const q = new erBase.QueryArticlesIter(er, 
        {   
            keywords: erBase.QueryItems.OR(["Blockchain", "blockchain", "Cryptocurrency", "cryptocurrency", "Bitcoin", "bitcoin", "Ethereum", "ethereum"]),
            keywordsLoc: "title",
            isDuplicateFilter: "skipDuplicates",
            hasDuplicateFilter: "skipHasDuplicates",
            dateStart: "2018-07-01",
            dateEnd: "2018-07-31",
            maxItems: -1, 
            lang: "eng", 
            sortBy: "date",
            sortByAsc: "true"
        });
    
        // Items => Callback to iterate through items.
        // done => Callback when the search is complete.
        q.execQuery(items, done); 
}

function items(articles, err) {
    console.log("Fetching items.");

    for(const article of articles) {
        var time = new Date(article.dateTime);
        var obj = {
            'title': article.title,
            'source': article.source.title, 
            'url': article.url,
            'dateTime': article.dateTime,
            'date': article.date,
            'time': time.getTime(),
        }; 
        newsData.push(obj);
    } 
}

function done(err) {
    if (!err) {
        var jsonData = JSON.stringify(newsData);
        var basePath = "/Users/amaykataria/Documents/openFrameworks/0.96/apps/Block-Inscribe/Transactions/JSON/";
        fs.writeFile(basePath + month + ".json", jsonData, function(err) {
            if (!err) {
                console.log("Total articles found: " + newsData.length);
            }
        });
    }
}

// Get news. 
queryNews();
