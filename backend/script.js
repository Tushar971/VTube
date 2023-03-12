const express = require('express');
const app = express();

const data = [{}];

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tushars:Tushar%402001@Cluster0.wyfyld2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    await client.connect();
    const database = client.db("sample_videos");
    const collection = database.collection("videos");
    const cursor = collection.find();
    await cursor.forEach(doc => data.push(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.log);

app.get('/', (req, res) => {
  const {id} = req.params;//for taking input from the route
  db.select('*').from('users').where({id:id})
  .then(user => {
      if(user.length) {
          res.json(data.name);
      }
      else {
          res.status(400).json('Not Found');
      }
  })
  .catch(err => res.status(400).json('error getting user'));
})

app.listen(3001, () => {
    console.log('App is running on port 3001');
});