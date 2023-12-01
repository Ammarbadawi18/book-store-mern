import React from 'react';

const BookSection = ({ data }) => {
  console.log(data);
  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap">
      {data &&
        data.map((item, index) => (
          <div
            className=""
            style={{
              width: '200px',
              height: '350px',
              border: '1 px solid white',
              borderRadius: '20px',
            }}
          >
            <div>
              <img
                style={{
                  width: '200px',
                  height: '210px',
                  borderTopLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h6 style={{ fontSize: '15px' }} className="text-white px-2 m-0">
              {item.bookName.slice(0, 10)}...
            </h6>
            <b style={{ fontSize: '30px', color: 'red' }} className="mb-2 px-2">
              $ {item.price}
            </b>
          </div>
        ))}
    </div>
  );
};

export default BookSection;
