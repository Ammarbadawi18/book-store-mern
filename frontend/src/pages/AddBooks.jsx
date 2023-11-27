import React from 'react';

const AddBooks = () => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: '91.5vh' }}>
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
          />
        </div>
        <button className='btn btn-success'>Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
