import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = (props) => {
    return (
        <div className='card card-primary'>
            { props.children }
        </div>
    )
} 

export default Card;