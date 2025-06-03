const { connectDatabase, closeDatabase } = require('../config/databaseConfig');

const createNewNote = async (req, res) => {
  const { title, note } = req.body;

  try {
    const notesCollection = await connectDatabase();

    await notesCollection.insertOne({
      title: title,
      note: note
    });

    res.status(201).json({
      success: true,
      message: "Note created"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error creating note"
    });
  }finally{
    await closeDatabase();
  }

}

module.exports = {createNewNote}