const express = require('express');
const Twitter = require('twit');
 
const app = express();
const client = new Twitter({
  consumer_key: 'QCsz3FgTFnKHqF2YTVKcgeUcE',
  consumer_secret: 'YjWkxMVKFRYv2zPcpleEjUKWZBb69jEDfC5x7BC6Uej9Nwk0Up',
  access_token: 'QCsz3FgTFnKHqF2YTVKcgeUcE',
  access_token_secret: 'YjWkxMVKFRYv2zPcpleEjUKWZBb69jEDfC5x7BC6Uej9Nwk0Up'
});
 
 
app.use(require('cors')());
app.use(require('body-parser').json());
 
app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});
app.listen(3000, () => console.log('Server running'));