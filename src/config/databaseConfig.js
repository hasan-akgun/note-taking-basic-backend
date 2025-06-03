const {MongoClient} = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE);

const connectDatabase = async ()=>{
  let notes;

  try {
    await client.connect();
    const db = client.db('db');

    console.log("Connected to DB")

    return notes = db.collection('notes')

  } catch (error) {
    console.log("NOT Connected: " + error);
  }
}

const closeDatabase = async ()=>{
  await client.close();
}

module.exports = {connectDatabase, closeDatabase};