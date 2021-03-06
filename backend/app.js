var PostMethod = require('./Database/Post.js')
var bodyParser = require('body-parser');
const express = require('express');
var request = require('request');
const app = express();
app.use(bodyParser.json());

const port = 5000;
const cache = require('./routeCache');


app.get('/getTopHeadlines',cache(300), (req, res) => {
    request("https://gnews.io/api/v4/top-headlines?&lang=en&token=ec66fef0cc8ac21ca55bd3c9e7d72223",function(error,response,body){
     if(!error && response.statusCode == 200){
         var parsedBody = JSON.parse(body);

         res.send(parsedBody['articles']);
     }
    });

  })
  app.get('/search',cache(300), (req, res) => {
    request("https://gnews.io/api/v4/search?q="+req.query.searchValue+"&token=ec66fef0cc8ac21ca55bd3c9e7d72223",function(error,response,body){
      if(!error && response.statusCode == 200){
          var parsedBody = JSON.parse(body);
 
          res.send(parsedBody['articles']);
      }
     });
  })

  app.post('/UserAction', (req, res) => {
    
    var response = PostMethod.Post(req.body);
    res.send(response);
     
   

     });
  
app.listen(port, () => {
  
})