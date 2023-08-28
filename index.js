const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 7000;

const categories = require('./data/cetegories.json');
const news = require('./data/news.json');
app.use(cors());

app.get('/news', (req, res) =>{
  res.send(news);
})

app.get('/news/:id', (req, res) =>{
const id = req.params.id;

const selectedNews = news.find(n => n._id === id);
res.send(selectedNews);

})



app.get('/categories', (req, res) =>{
    res.send(categories);
})


app.get('/categories/:id', (req, res) =>{
  const id = parseInt(req.params.id) ;
 
  if(id === 0){
    res.send(news);
  }
  else{
    const selectedCatagories = news.filter(n => parseInt(n.category_id) === id);
    res.send(selectedCatagories);
  }
  
  })

app.get('/', (req, res) => {
  res.send('News is runnig')
})

app.listen(port, () => {
  console.log(`news website on port ${port}`)
})