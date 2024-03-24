const express = require('express')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
var cors = require('cors')

const { MongoClient } = require('mongodb');
dotenv.config()

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';


const app = express()

app.use(bodyparser.json())
app.use(cors())

client.connect();

// get passwords
app.get('/',async function (req, res) {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray()
  res.json(findResult)
})

// save passwords
app.post('/',async function (req, res) {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password)
    res.send(
        {success: true, result: findResult}
    )
  })

// delete password
app.delete('/',async function (req, res) {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password)
    res.send(
        {success: true, result: findResult}
    )
  })

app.listen(3000)