var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "306ffc3c",
  application_key: "ebfa2bc2097c80b8403df6ab69d13d1f"
});

textapi.sentiment({
    'text': 'John is a very good football player!'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
    }
  });