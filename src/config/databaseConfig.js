const {MongoClient} = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DATABASE);

const connectDatabase = async ()=>{
  let notesCollection;

  try {
    await client.connect();
    const db = client.db('db');

    console.log("Connected to DB")

    return notesCollection = db.collection('notes')

  } catch (error) {
    console.log("NOT Connected: " + error);
  }
}

const closeDatabase = async ()=>{
  await client.close();
  console.log("Closed DB connection");
}

module.exports = {connectDatabase, closeDatabase};