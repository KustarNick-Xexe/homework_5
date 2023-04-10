import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Body = (props) => {
    return (
        <div className = "card-body">
            <h5 className = "card-title">{ props.title }</h5>
            <p className = "card-text">{ props.text }</p>
            <a href = "#" className = "btn btn-primary">Go somewhere</a>
        </div>
    )
} 

export default Body;