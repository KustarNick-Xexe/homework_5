import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Image = (props) => {
    return (
        <img 
            src = { props.src } 
            className = "card-img-top" 
            alt = "..." >
        </img>
    )
} 

export default Image;