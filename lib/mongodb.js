// https://www.codewithharry.com/blogpost/how-to-integrate-mongodb-into-your-nextjs-apps?gad_source=1&gad_campaignid=23376876875&gbraid=0AAAAAqQsM_3cpK_Kip7TBmscZngAhBO8j&gclid=CjwKCAjwyOzSBhBTEiwAmxvJ-hc16jbGhBuhMQXAZRcWa5NHspq2RgD5l2piyFxIY3YXTgaVcuRsfxoCbiUQAvD_BwE
// lib/mongodb.js

// lib/mongodb.js
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI

let client
let clientPromise

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { 
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

export default clientPromise