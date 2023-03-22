import React from 'react';
import Card from "./Card"
import "./feature.scss"

const Feature = ({type}) => {
    return (
        <div className='Featured-container'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                    lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                    suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className="bottom">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Feature;
