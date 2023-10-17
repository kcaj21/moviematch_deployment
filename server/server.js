const express = require('express');
const app = express();

const allowedOrigins = ["http://localhost:3000", "https://moviematchtest-api.onrender.com/", "https://moviematch-test-frontend.onrender.com/"]

URI = 'mongodb+srv://alexkcaj:xGlxP84hSTKW9zjo@alexjackcluster.bzrtr4n.mongodb.net/?retryWrites=true&w=majority'


const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

// MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
MongoClient.connect(URI, {useUnifiedTopology: true})
.then((client) => {
  const db= client.db('moviematchtest');
  const favouritesCollection= db.collection('favourites');
  const favouritesRouter= createRouter(favouritesCollection);
  app.use('/favourites', favouritesRouter);
  const moviesCollection= db.collection('movies');
  const moviesRouter= createRouter(moviesCollection);
  app.use('/movies', moviesRouter);
}).catch(console.err)

app.listen(10000, function () {
    console.log(`listening on Port ${this.address().port}`)  
});

