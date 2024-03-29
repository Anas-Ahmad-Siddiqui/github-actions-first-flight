const express = require('express');
const axios = require('axios')

const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('<h1>Express Demo App</h1> <h4>Message: Successfully deployed using Github Actions</h4> <p>Version: 1.5<p>');
});

app.get('/items', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      res.send(response.data);
    })
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} else {
  module.exports = app
}



