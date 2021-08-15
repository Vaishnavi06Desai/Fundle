const express = require('express');
const Twitter = require('twit');
 
const app = express();
const client = new Twitter({
  consumer_key: 'x7H8Uw2hK2QQxrB1ZEYhnd1FY',
  consumer_secret: '9ai3WIRX4Y6EE5ZxcmE4AXqI36geXLHyF0kBkFFAjlVqgl29t1',
  access_token: '1337443828500819968-jKBU78kKcydBZIb5u007k3JxMAV3Uy',
  access_token_secret: 'BVFkYnsoh4St9D4645jWQkqrM4YTLsPGIjLFYlIlqdQzq'
});
 
 
app.use(require('cors')());
app.use(require('body-parser').json());
 
app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/mentions_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
app.listen(3000, () => console.log('Server running'));