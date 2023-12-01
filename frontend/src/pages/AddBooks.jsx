import React, { useState } from 'react';
import axios from 'axios';

const AddBooks = () => {
  const [Data, setData] = useState({
    bookName: '',
    author: '',
    description: '',
    image: '',
    price: '',
  });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post('http://localhost:1000/bookstore/add', Data)
      .then((res) => alert(res.data.message));
    setData({
      bookName: '',
      author: '',
      description: '',
      image: '',
      price: '',
    });
    console.log(Data);
  };
  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: '91.5vh' }}
    >
      <div className="container p-4">
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Name:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book name."
            name="bookName"
            value={Data.bookName}
            onChange={change}
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Author:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter author name."
            name="author"
            value={Data.author}
            onChange={change}
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Description:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book description."
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Image:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter image URL."
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Book Price:
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter book price."
            name="price"
            value={Data.price}
            onChange={change}
          />
        </div>
        <button className="btn btn-success" onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBooks;
