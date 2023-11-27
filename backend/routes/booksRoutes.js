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

router.get('/getBook/:id', async (req, res) => {
  let book;
  let id = req.params.id;
  try {
    book = await bookModel.findById(id);
    res.status(200).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/updateBook/:id', async (req, res) => {
  let book;
  let id = req.params.id;
  let { bookName, description, author, image, price } = req.body;
  try {
    book = await bookModel.findByIdAndUpdate(id, {
      bookName,
      description,
      author,
      image,
      price,
    });
    await book.save().then(() => {
      res.status(200).json({ message: 'Updated the book.' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/deleteBook/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await bookModel.findByIdAndDelete(id).then(() => {
      res.status(200).json({ message: 'Book deleted.' });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
