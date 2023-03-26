import React from 'react';
import Card from "../FeaturedProducts/Card"
import "./list.scss"

const List = () => {
    return (
        <div className='list'> 
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default List;
