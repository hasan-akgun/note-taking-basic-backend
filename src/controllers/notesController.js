const { ObjectId } = require("mongodb")
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
  } finally {
    await closeDatabase();
  }

}

const deleteNote = async (req, res) => {
  const {_id} = req.body


  try {
    const notesCollection = await connectDatabase();

    await notesCollection.deleteOne({
      _id: new ObjectId(_id)
    })

    res.status(201).json({
      success: true,
      message: "Note deleted"
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Couldnt delete"
    })
  } finally {
    await closeDatabase();
  }

}

const readAllNotes = async (req, res) => {
  try {
    notesCollection = await connectDatabase();

    const allNotes = await notesCollection.find({}).toArray();

    res.status(201).json({
      success: true,
      notes: allNotes
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Couldnt read"
    })
  } finally {
    await closeDatabase();
  }


}

const readNoteId = async (req, res) => {
  const _id = req.params.id;

  try {
    const notesCollection = await connectDatabase();

    const note = await notesCollection.find({
      _id: new ObjectId(_id)
    }).toArray();

    res.status(201).json({
      success: true,
      note: note
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Couldnt find"
    })
  } finally {
    await closeDatabase();
  }
}

const updateNote = async (req, res) => {
  const { title, note } = req.body;
  const {_id} = req.body;
  
  try {
    const notesCollection = await connectDatabase();

    await notesCollection.updateOne(
      { _id: new ObjectId(_id) },

      {
        $set: { title: title, note: note },
        $currentDate: { lastModified: true }
      }
    );

    res.status(201).json({
      success: true,
      message: "Note updated"
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: true,
      message: "Couldnt update"
    })
  } finally {
    await closeDatabase();
  }


}

module.exports = { createNewNote, deleteNote, readAllNotes, updateNote, readNoteId }