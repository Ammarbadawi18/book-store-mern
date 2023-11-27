import React from 'react';
import "./Home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className='Home-Page bg-dark text-white container-fluid'>
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-start flex-column">
                <h2 style={{ fontSize: "70px", marginBottom: "20px" }}>The Book Store</h2>
                <Link to="/books" className='viewBook btn btn-success'>View Books</Link>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-end flex-column">
                <img
                    className='img-fluid homeimg'
                    src='https://s3.envato.com/files/338773965/85_1R3A7196.jpg'
                    alt='Bookstore'
                />
            </div>
        </div>
    </div>
  );
}

export default Home;
