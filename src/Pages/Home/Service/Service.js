import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,price,img,description}=service
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>This is service {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Link to='/ServiceBookingDetails'><button  className='btn btn-primary'>Book</button></Link>
        </div>
    );
};

export default Service;