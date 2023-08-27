const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 7000;

const categories = require('./data/cetegories.json');
app.use(cors());

app.get('/categories', (req, res) =>{
    res.send(categories);
})

app.get('/', (req, res) => {
  res.send('News is runnig')
})

app.listen(port, () => {
  console.log(`news website on port ${port}`)
})