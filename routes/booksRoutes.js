const router = require('express').Router();
const bookModel = require('../Models/bookModel');

router.post('/add', async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: 'Book Added.' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getBooks', async (req, res) => {
  let books;
  try {
    books = await bookModel.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/getBooks/:id', async (req,res)=> {
    let book;
    let id = req.params.id;
    try {
      book = await bookModel.findById(id);
      res.status(200).json({book});
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
})
module.exports = router;
