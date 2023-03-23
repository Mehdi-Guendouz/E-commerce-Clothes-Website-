import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss"

const Card = () => {
    return (
        <Link to={`/products/23`} className="links">
            <div className='card'>
                <div className="images">
                    <span>New Season</span>
                    <img src="./pic1.jpeg" alt="" className='mainImg'/>
                    <img src="./pic2.jpeg" alt="" className='secondImg'/>
                </div>
                <h2>title</h2>
                <div className="prices">
                    <h3>40$</h3>
                    <h3>19$</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;
